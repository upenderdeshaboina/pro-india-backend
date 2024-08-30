const Task=require('../models/Task')

exports.getTasks=async(req,res)=>{
    try {
        const tasks=await Task.find({user:req.user.id});
        // console.log(tasks)
        res.json(tasks)
    } catch (error) {
        res.status(400).json({message:'error fetching tasks',error})
    }
}

exports.createTask=async(req,res)=>{
    try {
        const task=await Task.create({...req.body,user:req.user.id});
        res.status(201).json(task)
    } catch (error) {
        res.status(400).json({message:'error creating Task', error})
    }
}

exports.updateTask=async(req,res)=>{
    try {
        const task= await Task.findOneAndUpdate({
            _id:req.params.id,user:req.user.id
        },req.body,{new:true})
        res.json(task)
    } catch (error) {
        res.status(400).json({message:'Error updating task',error})
    }
}

exports.deleteTask=async(req,res)=>{
    try {
        await Task.findOneAndDelete({_id:req.params.id,user:req.user.id})
        res.json({message:'Task deleted successfully'})
    } catch (error) {
        res.status(400).json({message:'error deleting task',error})
    }
}