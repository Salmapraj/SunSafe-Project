import express from "express"
import bodyParser from "body-parser"
import axios from "axios"
import 'dotenv/config'
const app = express()
const port =process.env.PORT||3000
const API_URL = "https://api.openuv.io/api/v1/uv"
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("index.ejs")
 }),
app.post("/uv",async (req,res)=>
    {
        console.log(req.body)
        const {lat, lng ,alt, dt} =req.body //destructuring of bobdy body comes in obj format
    try{
     const response= await axios.get(API_URL,{
        params :{
            lat : latitude,
            lng : longitude,
            alt : altitude,
            dt : depth,
        }
     })
    }catch(error){
        res.render("index.ejs",{error : error.message})
    }
})

app.post("/view",(req,res)=>{
    res.send("server is ready")
 })
app.listen(port,()=>{
console.log(`server is running at ${port}`)
 })