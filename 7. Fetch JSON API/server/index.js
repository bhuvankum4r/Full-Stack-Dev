const express= require('express')
const cors=require('cors')
const data=require('./data.json')
const app=express()

app.use(cors())
app.use(express.json())

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/abcd').then(()=>{
    console.log("connected to database");
})

app.get('/data',(req,res)=>{   
         res.json(data)  
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})