const mongoose = require('mongoose')
//const url ='mongodb://localhost:27017/Pharmacy'
const url = 'mongodb+srv://muhammadimanirfan219:fall2021065219@testing.xp2dzck.mongodb.net/?retryWrites=true&w=majority&appName=Testing'
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

