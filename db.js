const mongoose = require('mongoose')
const url ='mongodb://localhost:27017/Pharmacy'
mongoose.connect(url)


const con =mongoose.connection;
con.on('connected',()=>{
    console.log('connected to database')
})

con.on('error',(error)=>{
    console.log('Error occur during connection');
})

con.on('disconnected',()=>{
    console.log('disconnected from database')
})

module.exports = con;

