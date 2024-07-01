const express = require('express')
const app =express();
const con = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())


const medRouter = require('./routes/medicine')
 app.use('/medicines',medRouter)
app.listen(3000)