const mongoose = require('mongoose')

const medSchema = new mongoose.Schema({
    name :{
       type: String
    },
    price : {
        type: Number
    },
    quantity : {
        type: Number
    },
    userName :{
        type: String,
      required:true,
    },
    password : {
        type: String,
        required:true,
    }
}) 


const medicineModel = new mongoose.model('Medicines',medSchema)
module.exports = medicineModel;