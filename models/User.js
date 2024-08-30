const mongoose=require('mongoose')
const {v4:uuid}=require('uuid')

const userSchema=new mongoose.Schema({
    _id:{type:String,default:uuid},
    email:{type: String, required:true, unique: true},
    password:{type:String, required:true}
})

module.exports=mongoose.model('User',userSchema)