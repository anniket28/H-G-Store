// Database for Health and Gen Store

// Required Packages
const mongoose=require('mongoose')
const config=require('./config.json')

// Establishing Database Connection
const connection=mongoose.connect(config.MongoURI,()=>{
    console.log('Connected to Database')
})

module.exports=connection