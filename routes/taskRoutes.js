const express=require('express')
const {getTasks,createTask,updateTask,deleteTask}=require('../controllers/taskControllers')
const authMiddleWare=require('../middleware/authmiddleWare')

const router=express.Router()

router.get('/all',authMiddleWare,getTasks)
router.post('/add',authMiddleWare,createTask)
router.put('/update/:id',authMiddleWare,updateTask)
router.delete('/delete/:id',authMiddleWare,deleteTask)

module.exports=router