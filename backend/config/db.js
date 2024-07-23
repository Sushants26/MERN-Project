import mongoose, { connect } from "mongoose";

 export const connectDB=async()=>{
    
    await mongoose.connect('mongodb+srv://sushants0724:jiwanjhumba@cluster0.zaxzgjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("Database Connected"));

}