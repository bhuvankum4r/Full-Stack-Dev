const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
app.use(cors())

//database
mongoose.connect('mongodb://localhost:27017/question10').then(()=>{
    console.log("connected to database");
})

//schema
const dataSchema=new mongoose.Schema({
    data:String
})

const Data = mongoose.model('Data', dataSchema);



app.get('/read',async(req,res)=>{
    const data = await Data.find();
    console.log(data)
        res.send(data);
    
})

app.listen(3000,()=>{
    console.log("server started");
})