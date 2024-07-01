const express = require('express')
const router = express.Router()
const med = require('.././Models/medicine')

router.get('/', async (req,res)=>{

    try{

        const Data=await med.find()
        res.status(200).json(Data);
        res.json("data fetch successfully")

    }catch(error){
        res.status(500).json({error:'internal server error'})
    }
})

router.post('/',async (req,res)=>{
    try{
    const medData = req.body;
    const db = new med(medData);
    const response = await db.save();
    res.status(200).json(response)
    }catch(error){
        console.log(error)
        res.status(500).json({error:"internal server error"})
    }
})

router.get('/:med', async (req,res)=>{
    const data = await med.find({name: req.params.med})
    res.status(200).json(data);
   
   })

   module.exports = router

   router.put('/:id',async(req,res)=>{
    try{
        const data = req.body;
        const id = req.params.id;
        const response = await med.findByIdAndUpdate(id,data,{
            new:true
        })
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({error:"internal server error"})
    }
   })