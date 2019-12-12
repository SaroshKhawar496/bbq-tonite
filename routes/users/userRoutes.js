"use strict";

const express = require("express");

const userRouter = express.Router();
// const requiresAuth = require("./requiresAuth");

const tokenService = require("./tokenService");

const { model: UserModel } = require("./userModel");
const { request: RequestModel } = require("./requestModel");
// yup validation schemas
const { registerValidation, loginValidation } = require("./validation");

// new user registration route
userRouter.route("/").post(async (req, res, next) => {
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;
  const { msg, errors } = await registerValidation(req.body);

  if (msg) {
    //validation passed
    const emailExist = await UserModel.findOne({ email: req.body.email });
    console.log("email Exist: ", emailExist);
    if (emailExist) {
      console.log("email exists if");
      return res
        .status(400)
        .send({ error: "User with this email already exists" });
    }
  } else {
    console.log(errors);
    return res.status(400).send({ error: errors[0] });
  }
  const user = new UserModel({
    firstName,
    lastName,
    email,
    password
  });
  try {
    console.log("saving user: ", user);
    const savedUser = await user.save();
    return res.send({ user: savedUser._id });
  } catch (err) {
    console.log("error while saving ");
    return res.status(400).send(err);
  }
});

// Login Route
userRouter.route("/login").post(async (req, res, next) => {
  const { email, password } = req.body;

  //doing validation
  const { msg, errors } = await loginValidation(req.body);
  if (msg) {
    //validation passed
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).send({ error: "User doesn't exist!" });
      } else {
        const match = await user.comparePassword(password);
        if (match) {
          const token = tokenService.issueToken(user);
          return res.header("Authorization", token).send(token);
        } else {
          return res.status(401).send({ error: "Incorrect Password" });
        }
      }
    } catch (e) {
      return res.status(400).send({ error: e });
    }
  } else {
    return res.status(400).send({ error: errors[0] });
  }
});

// api for checking valid token status for front end protection
userRouter.use("/checkToken", tokenService.verifyToken);
userRouter.route("/checkToken").get(async (req, res) => {
  return res.sendStatus(200);
});

// added the token verfication for createReservation
userRouter.use("/reservation/*", tokenService.verifyToken);

userRouter.route("/reservation/create").post(async (req, res, next) => {
  const {
    seatsReqd,
    // type,
    bookingDateAndTime,
    locationId
  } = req.body;
  console.log(req.body);
  // const status = "pending";
  console.log(req.user);
  console.log(req.user.user.id);
  // return res.send({});
  try {
    const reservation = new RequestModel({
      // id,
      userId: req.user.user.id,
      seatsReqd,
      // type,
      bookingDateAndTime,
      locationId
      // status
    });
    console.log("id from user type: ", typeof req.user.user.id);
    // const doc = await reservation.save();
    UserModel.findOne({ _id: req.user.user.id }, function(err, user) {
      console.log(user);
      if (!err) {
        const doc = reservation.save();
        user.reservations.push(doc._id);
        user.save(function(err) {
          if (err) {
            return res.status(500).send({ error: "Something went wrong" });
          } else {
            return res.status(201).send({ msg: "Success" });
          }
        });
      } else {
        throw err;
      }
    });
  } catch (e) {
    return res.status(500).send({ error: "Something went wrong" });
  }
});

userRouter.route("/reservation/:id/delete").delete(async (req, res, next) => {
  const reservationId = String(req.params.id);
  console.log(reservationId);
  try {
    RequestModel.findOneAndDelete({ id: reservationId }).exec(function(
      err,
      reservation
    ) {
      res.status(201).send("success");
    });
  } catch (e) {
    next(e);
  }
});

userRouter.use("/reservations/*", tokenService.verifyToken);
userRouter.route("/reservations/view").get(async (req, res, next) => {
  const userId = req.user.user.id;
  console.log("User Id in view routes: ", userId);
  try {
    const views = RequestModel.find({ userId: userId }).exec(function(
      err,
      reservations
    ) {
      return res.status(200).send(reservations);
    });
  } catch (e) {
    next(e);
  }
});

userRouter.route("/me").get(async (req, res, next) => {
  console.log("req.user:", req.user);
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(404).send();
  }
});

/* admin routes below */
userRouter
  .route("/:id/reservation/changeStatus")
  .post(async (req, res, next) => {
    const reservationId = req.params.id;
    const theStatus = req.body.status;
    try {
      RequestModel.findOneAndUpdate(
        { id: reservationId },
        { $set: { status: theStatus } },
        { new: true },
        function(err, updatedReservation) {
          res.status(201).send(updatedReservation);
        }
      );
    } catch (e) {
      next(e);
    }
  });

userRouter.route("/reservations/viewall").get(async (req, res, next) => {
  try {
    RequestModel.find({}, function(err, reservations) {
      res.status(201).send(reservations);
    });
  } catch (e) {
    next(e);
  }
});
/* end of admin routes */

exports.router = userRouter;
