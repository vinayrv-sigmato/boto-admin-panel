const mongoose=require('mongoose')

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://vinay-sigmato:18102000.06052000@cluster0.2xnk7ht.mongodb.net/test")

        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch (error){
        console.log(error);
        process.exit(1)
    }
}
module.exports=connectDB