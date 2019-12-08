'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = exports.schema = new Schema({
    id: {
        type: String,
        unique: true    
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, 'Please fill a valid email address.'],
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    status: String, //regular or admin
    //created: { type: String, default: null },
    reservations: [{type: String}]
})

userSchema.pre('save', async function(next) {
    const user = this;
  
    if (user.isModified('password') || user.isNew) {
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

  userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

exports.model = mongoose.model('User', userSchema)
