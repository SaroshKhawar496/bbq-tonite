"use strict";

const mongoose = require("mongoose");
const express = require("express");

// 1. Create main express intance
const app = express();

const dotenv = require("dotenv");
dotenv.config();

// 2. Require routes
const { router: userRoutes } = require("./routes/users/userRoutes");
const { router: reviewRoutes } = require("./routes/reviews/reviewRoutes");

// 3. Require conatants
const { URL, PORT } = require("./utils/constants");

// 4. Ensure that the router is parsing the request body to appropriately format incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. Utilise routes
app.use("/api/users", userRoutes);
app.use("/api/restaurant/reviews", reviewRoutes);

// 6. Define configuration for mongodb
const MONGO_CONFIG = {
  dbName: "projectpicker",
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// 7. Start server
mongoose
  .connect(URL, MONGO_CONFIG)
  .then(async () => {
    console.log(`Connected to database at ${URL}`);
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch(err => {
    console.log("aaaa");
    console.error(err);
  });
