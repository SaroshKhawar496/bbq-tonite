'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const restaurantSchema = exports.schema = new Schema({
  id: {
      type: String,
      unique: true    
  },
  availableSeats: {
      type: Number,
  }
})

exports.restaurant = mongoose.model('Restaurant', restaurantSchema)

