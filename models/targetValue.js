import mongoose from "mongoose";

const TargetValueSchema = new mongoose.Schema({
    name: {type:String,default:"target"},
    value: {type:Number,required:true,default:0}}
   
)
export default TargetValueSchema
