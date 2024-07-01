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
}) 


const medicineModel = new mongoose.model('Medicines',medSchema)
module.exports = medicineModel;