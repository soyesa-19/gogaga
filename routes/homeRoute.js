const express = require('express');
const bodyParser = require('body-parser');
const Router = require('router');
const User = require('../model/user');

const homeRouter =  express.Router()
homeRouter.use(bodyParser.json())

const h = "Hello World"

homeRouter.route('/')
.get((req,res)=>{
    User.find({})
    .then((users)=>{
        if (!users){
            console.log("No users Found")
        }
        else{
            res.render('home', {users:users})
        }
    })
    
})

.post((req,res)=>{
    User.create({
            name:req.body.name,
            city:req.body.city,
            email:req.body.email
        })
    .then((user)=>{
        if (!user){
            console.log("user not created");
        }
        else{
            console.log('Successfully created user');
            res.redirect('/')
        }
    }, (err)=>{console.log(err)})
    .catch((err)=>{console.log(err)})
})

module.exports = homeRouter;
