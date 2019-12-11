'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const requestSchema = exports.schema = new Schema({
  id: {
      type: String,
      unique: true    
  },
  userId: {
    type: String,
    required: true
  },
  seatsReqd: {
      type: Number,
      required: true
  },
  type: {
      type: String,
      required: true
  },
  bookingDateAndTime: {
      type: String,
      required: true
  },
  locationId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum : ['accepted','declined', 'pending', 'cancelled'],
    required: false
  }
})

exports.request = mongoose.model('Request', requestSchema)

