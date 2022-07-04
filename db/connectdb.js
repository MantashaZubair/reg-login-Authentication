import mongoose from "mongoose"


const connectdb = async(DATABASE_URL)=>{
    const Object_DB={
        dbName: process.env.D_NAME
    }
    try{
    const  result = await mongoose.connect(DATABASE_URL, Object_DB)
    }catch (err){
        console.log(err)
    }
}

export default connectdb