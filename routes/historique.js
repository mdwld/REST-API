//require express
const express = require('express');
const Historique = require('../models/Historique');


//  express router
const router = express.Router()


router.post('/addHistory', async(req,res)=>{
try {
   const {history} = req.body;
   const newHistory = new Historique ({history : req.body.history})
   await newHistory.save();
   res.status(200).send({msg : 'history added ', newHistory})
} catch (error) {
    res.status(400).send({msg : 'history failed' , error})
}
}); 

router.get('/allHistory', async(req,res)=>{
    try {
        const listHistory = await Historique.find();
        res.status(200).send({msg :'all history getted', listHistory})
    } catch (error) {
        res.status(400).send({msg : 'failed history', error})
    }
})

module.exports = router; 