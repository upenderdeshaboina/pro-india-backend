const mongoose=require('mongoose')
const {v4:uuid}=require('uuid')

const taskSchema=new mongoose.Schema({
    _id:{type:String, default:uuid},
    title:{type: String, required: true},
    description: {type: String},
    status: {type: String, enum: ['To Do','In Progress','Completed'],default:'To Do'},
    user:{type: String, ref:'User', required:true}
})

module.exports= mongoose.model("Task",taskSchema)