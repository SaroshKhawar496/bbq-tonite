"use strict";

const express = require("express");
const reviewsRouter = express.Router();

const axios = require("axios");

reviewsRouter.route("/").get(async (request, response, next) => {
  console.log("route hit");
  // let result;
  // This should probably be done on the front end to avoid the additional
  // latency involved in making a request only to make another request
  //  ex: client ---200ms---> Server ---400ms---> Google (2 steps, 200 + 400 ms = 600ms request, but if either takes longer the whole process takes longer)
  // vs: client ---400ms---> Google (1 step, only relies on google)
  // To protect your google places API key, once its on the front end, you can add restrictions (see: https://developers.google.com/maps/api-key-best-practices#best_practice_list)

  // Alternatively, we could cache the result of this request in memory so we only need to make it once (or memoize a request helper function)
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GOOGLE_PLACES_API}&place_id=ChIJEduQtpU4K4gRRy1zWUJ9244`
    )
    .then(res => {
      // console.log(res.data);
      // result = res.result;
      response.send(res.data.result);
    })
    .catch(err => {
      response.status(400).send({});
    });
});

exports.router = reviewsRouter;
