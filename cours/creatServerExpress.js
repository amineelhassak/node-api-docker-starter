const express = require("express");

express().get("/",(req,res)=>{
    res.end("Connection is Success");
}).listen(3000,()=> {
    console.log("Server is running at http://localhost:3000");
})