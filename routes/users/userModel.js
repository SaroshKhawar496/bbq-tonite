"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = (exports.schema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 25
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 25
  },
  email: {
    type: String,
    // match: [/.+\@.+\..+/, "Please fill a valid email address."],
    required: true,
    unique: true,
    min: 6,
    max: 40
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 30
  },
  role: { type: String, default: "user", enum: ["admin", "user"] }, //regular or admin
  reservations: [{ type: String }]
}));

userSchema.set("timestamps", true);

userSchema.pre("save", async function(next) {
  const user = this;

  if (user.isModified("password") || user.isNew) {
    try {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
      return next();
    } catch (e) {
      return next(e);
    }
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

exports.model = mongoose.model("User", userSchema);
