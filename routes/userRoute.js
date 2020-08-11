const express = require('express');
const bodyParser = require('body-parser');
const User = require('../model/user');
// const popups = require('popups');

const userRouter =  express.Router()
userRouter.use(bodyParser.json());


userRouter.route('/')
.get((req,res)=>{
    res.redirect('/')
})
.post((req,res)=>{
    User.find({name:req.body.search})
    .then((users)=>{
        if (!users){
            console.log("No users Found")
            res.redirect('/')
        }
        else{
            res.render('selectedUser', {users:users})
        }
    })
    
})

module.exports = userRouter;