import mongoose from "mongoose"

import UserModels from "../models/user.js"
class UserController {
    static createDox = (req,res) =>{
        res.render("index")
        
    }

    static ResistrationDox =(req,res) => {
        res.render("resistration")
    }
    static ResisterForm=async (req,res)=>{
        try{
            const {name, email,password}= req.body;
            const doc = new UserModels({
                name:name,
                email:email,
                password:password
            })
            const result = await doc.save()
            res.redirect("/login")
        }catch(err){
            console.log(err)
        }
       
    }
  

    static LoginDox =(req,res)=>{
        res.render("login")
    }

   static Login=async(req,res)=>{
       try{
           const {name,email,password} =req.body
           const result = await UserModels.findOne({email:email})
           if (result !=null){

           if (req.body.email==result.email&& req.body.password==result.password){
            res.render("dashboard")
           }else{
            res.send("please enter valid email")
           }
        }else{

            res.redirect("/resistration")
        }
          
       }catch(err){
           console.log(err)
       }
   }
  
   static ForgotDox = (req,res)=>{
    res.render("forgot")
   }

   static Forgot =async(req ,res)=>{
    try{
       
        const result = await UserModels.findByIdAndUpdate(req.params.id, req.body.password)
          res.redirect("/login")
       
    }catch(err){
        console.log(err)
    }
   }

}

export default UserController;