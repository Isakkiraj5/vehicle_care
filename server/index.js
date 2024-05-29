const express = require('express')
const mongoose =require("mongoose");
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json())
const url='mongodb+srv://isakkiraj:Esscooty%407300@cluster0.fdsuknk.mongodb.net/vehicle-care'
const usermodel =require('./model/user')
const port=process.env.port || 3000
mongoose.connect(url)
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password)
    usermodel.findOne({ email: email })
    .then((user) => {
        if (user) {
          if (user.password === password) {
            console.log('Login successful for:', user.email);
            res.json("success");
          } else {
            console.log('Password is Incorrect for:', user.email);
            res.json("Password is Incorrect");
          }
        } else {
          console.log('No user exists with email:', email);
          res.json("No user exist");
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        res.status(500).json("Internal Server Error");
      });
    })
app.post('/register',(req,res)=>{
usermodel.create(req.body)
.then((user)=>res.json(user))
.catch((err)=>res.json(err))
})

app.listen(port, ()=>{
    console.log("server started")
   
})