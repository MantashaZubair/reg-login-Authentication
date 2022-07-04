import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{type:String , required:true , trim:true},
    email:{type:String, require :true},
    password :{type:Number,require:true}
})

const UserModels = mongoose.model("user", UserSchema)

export default UserModels;