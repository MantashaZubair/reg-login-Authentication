import dotenv from "dotenv"
dotenv.config({path:'config.env'})
import {join} from "path"
import express from "express"
import connectdb  from "./db/connectdb.js"
const app= express()
import web from "./routes/web.js"

const port = process.env.PORT||"3000"

const DATABASE_URL = process.env.DATABASE_URL

connectdb(DATABASE_URL);
//parser request to experss
app.use(express.urlencoded({extended :true}))

app.use("/", web)
//load assets




app.use("/",express.static(join(process.cwd(),"public")))
//app.use("/login/dashboard",express.static(join(process.cwd(),"public")))

//set view engine
app.set("view engine" ,"ejs")





app.listen(port, ()=>{
    console.log(`server listining at http://localhost:${port}`)
})