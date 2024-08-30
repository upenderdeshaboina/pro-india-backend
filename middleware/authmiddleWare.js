const jwt=require('jsonwebtoken')
const User=require('../models/User')

const authMiddleWare= async (req,res,next)=>{
    const token=req.header('Authorization').replace('Bearer ','')
    // console.log(token)
    try {
        const secretKey=process.env.SECRET_KEY
        const decodedJwt=jwt.verify(token,secretKey)
        const user=await User.findById(decodedJwt.id).select('-password')
        req.user=user
        next();
    } catch (error) {
        console.log(error.message)
        res.status(401).json({message:'Not authorized',error})
    }
}

module.exports=authMiddleWare