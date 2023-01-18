const express= require("express");
const bodyparser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors")

const app=express();



app.listen(5000,(req,res)=>{
    console.log("server started at port 5000")
})