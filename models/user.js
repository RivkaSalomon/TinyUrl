import mongoose from "mongoose"
// import LinkSchema from "./link"
const UserSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    links:[{type:mongoose.Schema.Types.ObjectId,ref:'Link'}]
})
export default mongoose.model("user",UserSchema)