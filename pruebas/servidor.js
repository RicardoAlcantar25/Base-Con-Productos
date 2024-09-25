const express=require("express");
require("dotenv").config();
const app=express();

var saludo=(req, res, next)=>{
    console.log("hola");
    next();
}

app.get("/home",saludo,(req,res)=>{
    res.send("Hola Home");
});


const port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Servidor en: http://localhost:"+port);
    
});