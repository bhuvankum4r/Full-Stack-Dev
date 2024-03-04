const express= require('express')
const cors=require('cors')
const students=require('./student.json')
const app=express()

app.use(cors())
app.use(express.json())

app.get('/studentdetails',(req,res)=>{
   
        if(students){
            res.json(students)
        }else{
            res.json({"error":"No students found"})
        }
    
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})