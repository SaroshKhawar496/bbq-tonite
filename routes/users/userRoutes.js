'use strict'

const express = require('express')
const clientRouter = express.Router()
const adminRouter = express.Router()
const requiresAuth = require('./requiresAuth')

const adminService = require('./adminService')
const clientService = require('./clientService')
const tokenService = require('./tokenService')

const { model: UserModel } = require('./userModel');
const { request: RequestModel } = require('./requestModel');

// POST /editUsers
adminRouter.route('/')
.post(async (req, res, next)=>{
    const { id, firstName, lastName, email, password, status } = req.body;
    const reservations = ["none"]
    try{
        const user = new UserModel({ id, firstName, lastName, email, password, status, reservations });
        const doc = await user.save();
        res.status(201).json({
            data: [doc]
        })

    } catch(e){
        next(e);
    }
})

adminRouter.route('/createReservation')
.post(async (req, res, next) => {
    const { userId, id, seatsReqd, type, bookingDateAndTime, locationId } = req.body
    const status = "pending"
    //const userId = req.user.id
    try{
        const reservation = new RequestModel({ id, userId, seatsReqd, type, bookingDateAndTime, locationId, status });
        const doc = await reservation.save();
        res.status(201).json({
            data: [doc]
        })

    } catch(e){
        next(e);
    }
})

adminRouter.route('/me').get(async (req, res, next) =>{
    console.log('req.user:', req.user)
    if(req.user){
        res.json(req.user)
    }
    else{
        res.status(404).send()
    }

})

// POST
adminRouter.route('/login')
.post(async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const user = await UserModel.findOne({email})
    if(!user){
        res.status(404).send()      
    } else{
        const match = await user.comparePassword(password);
        if(match){
            const token = tokenService.issueToken(user)
            res.json({
                access_token: token,
                refresh_token: null,
                refresh: '/api/users/login/refresh'
            })
        }
        else{
            res.status(401).send()
        }
    }
    }
    catch(e){
        next(e)
    }
})


exports.router = adminRouter;
