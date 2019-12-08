'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const reservationSchema = exports.schema = new Schema({
  id: {
      type: String,
      unique: true    
  },
  createdAt: {
    type: String,
    required: true
  },
  userId: {
      type: String,
      required: true
  },
  numOfSeatsReqd: {
      type: Number,
      required: true
  },
  bookingDateAndTime: {
      type: String,
      required: true
  },
  locationId: {
    type: String,
    required: true
  }
})

exports.reservation = mongoose.model('Reservation', reservationSchema)

