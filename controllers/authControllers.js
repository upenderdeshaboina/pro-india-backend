const User=require('../models/User')
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')

exports.register=async(req,res)=>{
    const {email, password}=req.body;
    try {
        const hashedPass=await bcrypt.hash(password,10)
        const user=await User.create({email,password: hashedPass})
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({message:'error registration user',error})
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body;
    // console.log(email,password)
    try {
        const user=await User.findOne({email})
        if (!user){
            return res.status(400).json({message:'user not found'})
        }
        // console.log(user)
        const isTrue=await bcrypt.compare(password,user.password)
        if (!user || !isTrue){
            return res.status(400).json({message:'Invalid credentials'})
        }
        const secret_key=process.env.SECRET_KEY
        const token=jwt.sign({id:user._id},secret_key,{expiresIn:'1h'})
        res.json({token,user:{id:user._id,email:user.email}})
    } catch (error) {
        res.status(400).json({message:'error login in ',error})
    }
}