"use strict";

const express = require("express");

const userRouter = express.Router();
const requiresAuth = require("./requiresAuth");

const tokenService = require("./tokenService");

const { model: UserModel } = require("./userModel");
const { request: RequestModel } = require("./requestModel");
const { registerValidation, loginValidation } = require("./validation");

// new user registration route
userRouter.route("/").post(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const { msg, errors } = await registerValidation(req.body);

  if (msg) {
    //validation passed
    const emailExist = await UserModel.findOne({ email: req.body.email });
    if (emailExist) {
      return res
        .status(400)
        .send({ error: "User with this email already exists" });
    }
  } else {
    return res.status(400).send({ error: errors[0] });
  }
  const user = new UserModel({
    firstName,
    lastName,
    email,
    password
  });
  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (err) {
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
        //   console.log("passwords match");
          const token = tokenService.issueToken(user);
          return res.json({
            access_token: token
            //   refresh_token: null,
            //   refresh: "/api/users/login/refresh"
          });
        } else {
          return res.status(401).send({ error: "Incorrect Password" });
        }
      }
    } catch (e) {
      next(e);
    }
  } else {
    return res.status(400).send({ error: errors[0] });
  }
});

userRouter.route("/createReservation").post(async (req, res, next) => {
  const {
    userId,
    id,
    seatsReqd,
    type,
    bookingDateAndTime,
    locationId
  } = req.body;
  const status = "pending";
  //const userId = req.user.id
  try {
    const reservation = new RequestModel({
      id,
      userId,
      seatsReqd,
      type,
      bookingDateAndTime,
      locationId,
      status
    });
    const doc = await reservation.save();
    res.status(201).json({
      data: [doc]
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

exports.router = userRouter;
