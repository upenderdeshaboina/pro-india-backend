const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        const uri=process.env.MONGO_URI
        // console.log(uri)
        await mongoose.connect(uri)
        console.log('mongoDB Connected successfully.')
    } catch (error) {
        console.log('mongoDB connection failed',error)
        process.exit(1);
    }
}
module.exports=connectDB