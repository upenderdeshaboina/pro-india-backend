const express=require('express');
const connectDB=require('./config/db')
const authRoutes=require('./routes/authRoutes')
const taskRoutes=require('./routes/taskRoutes')
const cors=require('cors')

const app=express();
require('dotenv').config()
const PORT=process.env.PORT || 3006
connectDB() // connecting to mongoDB

// middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/auth',authRoutes);
app.use('/tasks',taskRoutes)

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))