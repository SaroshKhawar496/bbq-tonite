"use strict";

const express = require("express");
const reviewsRouter = express.Router();

const axios = require("axios");

reviewsRouter.route("/").get(async (request, response, next) => {
  console.log("route hit");
  // let result;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GOOGLE_PLACES_API}&place_id=ChIJEduQtpU4K4gRRy1zWUJ9244`
    )
    .then(res => {
      console.log(res.data);
      // result = res.result;
      response.send(res.data.result);
    })
    .catch(err => {
      response.status(400).send({});
    });
});

exports.router = reviewsRouter;
