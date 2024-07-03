const express = require('express')
const app =express();
const con = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.Port || 3000

const log = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()} Request Made to ${req.originalUrl}`);
    next();
}
app.use(log)


const medRouter = require('./routes/medicine')
//iman imangit

 app.use('/medicines',medRouter)
app.listen(port)