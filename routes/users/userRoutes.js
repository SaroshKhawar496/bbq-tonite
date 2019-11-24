'use strict'

const express = require('express')
const clientRouter = express.Router()
const adminRouter = express.Router()

const adminService = require('./adminService')
const clientService = require('./clientService')

const { model: UserModel } = require('./userModel');

// POST /editUsers
adminRouter.route('/')
.post(async (req, res, next)=>{
    const { id, firstName, lastName, email, password, status } = req.body;
    try{
        const user = new UserModel({ id, firstName, lastName, email, password, status });
        const doc = await user.save();
        res.status(201).json({
            data: [doc]
        })


    } catch(e){
        next(e);
    }
})

// POST
adminRouter.route('/login')
.post(async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const user = await UserModel.findOne({email})
    if(!user){
        next(new Error('Not found...'))        
    } else{
        const match = await user.comparePassword(password);
        if(match){
            res.json({
                data: [user],
            })
        }
        else{
            next(new Error('User is unauthorized...'))
        }
    }
    }
    catch(e){
        next(e)
    }
})


exports.router = adminRouter;