const jwt = require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler= require('express-async-handler')
const Admin = require('../models/adminModel')

const loginAdmin=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const admin= await Admin.findOne({email})

    if(admin && (await bcrypt.compare(password, admin.password))){
        res.json({_id:admin.id,
            name:admin.name,
            email:admin.email,
            token:generateToken(admin._id)
        })
    }else {res.status(400)
    throw new Error('Invalid login credentials')}
  
})
const  registerAdmin = asyncHandler(async (req,res)=>{
    const { name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('please add all fields')
    }
    const AdminExists= await Admin.findOne({email})
    if(AdminExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt= await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const admin = await Admin.create({
        name,
        email,
        password: hashedPassword
    })
    if(admin){
        res.status(201).json({
            _id:admin.id,
            name:admin.name,
            email:admin.email,
            token:generateToken(admin._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid User Data')
    }
    
})

const getAdmin= asyncHandler(async(req,res)=>{
    const {_id, name, email}= await Admin.findById(req.admin.id)

    res.status(200).json({
        id:_id,
        name,
        email,
    })
})

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}
module.exports={
    registerAdmin,
    loginAdmin,
    getAdmin}