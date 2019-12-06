'use strict'

const express = require('express')
const clientRouter = express.Router()
const adminRouter = express.Router()
const requiresAuth = require('./requiresAuth')

const adminService = require('./adminService')
const clientService = require('./clientService')
const tokenService = require('./tokenService')

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

adminRouter.route('/:userId')
.put(async (req, res, next) => {
    const { userId } = req.params
    const { email, status } = req.body
    try{
        console.log(userId)
        const user = await UserModel.findById(userId)
        
        console.log("THE USER" + user)
        if(user){
            user = String(user)
            await user.update({email, status})
            const doc = await UserModel.findById(userId)
            res.json(doc.serialize())
        }
        else{
            res.status(404).send()
        }
    }
    catch(err){
        next(err)
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