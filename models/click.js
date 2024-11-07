import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
    insertedAt:{type: Date,default: Date.now()},
    ipAddress: {type:String,requied:true},
     targetParamValue: {type:String,default:"0"}
   
})
export default ClickSchema
