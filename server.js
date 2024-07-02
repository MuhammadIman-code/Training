const express = require('express')
const app =express();
const con = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.Port


const medRouter = require('./routes/medicine')
//iman imangit

 app.use('/medicines',medRouter)
app.listen(port)