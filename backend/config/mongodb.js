import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        mongoose.connection.on('connected',()=> console.log("Database Connected"))
    await mongoose.connect( `${process.env.MONGODB_URI}/curecrafter`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    }catch(error){
        console.error(error);
    }
    
}
export default connectDB;