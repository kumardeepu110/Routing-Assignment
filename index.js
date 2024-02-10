const express = require('express')
const mongo = require('mongoose')
const AdminRoutes = require('./routes/adminRoutes')
const studentRoutes = require('./routes/studentRoutes')
const userModel = require('./userModel')
const app = express()

mongo.connect('mongodb://127.0.0.1:27017/demoDB').then(r=>{
    console.log("DB Connected")
}).catch(err=>{
    console.log("error = "+err)
})

app.post('/user/add', (req,res)=>{
    let userobj = new userModel()

    userobj.name = "user1"
    userobj.email = "user1@gmail.com"

    userobj.save()

    res.send({
        success:true,
        status:200,
        message:"user added successfully"
    })
})

app.use('/admin',AdminRoutes)
app.use('/student',studentRoutes)

app.get('/', (req,res)=>{
    res.send("Welcome to the server")
})

app.listen(5000, (err)=>{
    if(err){
        console.log("error occured",err);
    }
    else{
        console.log("server is started");
    }
})