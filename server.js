const express = require('express')
const app =express();
const con = require('./db')
const medicine = require('./Models/medicine')
const bodyParser = require('body-parser')
const passport = require('passport')
const lp = require('passport-local').Strategy
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.Port || 3000
app.use(new LocalStrategy( async(userName,password,done)=>{
    try{
    const user = medicine.findOne({userName : userName})
    if(!user)
        {
            return done(null,false,{message : 'Invalid User Name'})
        }
        if(user.password !== password)
            {
                return done(null,false,{message:'incorrect password'})
            }
            else{
                return done(null,user)
            }
        }catch(error){
            return done(error,false,{message:'something went wrong'})
        }
}))
const log = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()} Request Made to ${req.originalUrl}`);
    next();
}
app.use(log)


const medRouter = require('./routes/medicine')
//iman imangit

 app.use('/medicines',medRouter)
app.listen(port)