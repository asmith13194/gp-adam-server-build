const express = require("express");
const app = express();

app.get("/",function(req,res){
  res.sendFile("/Users/adamsmith/Galvanize/Assignments/week08/expressserver_1/public/index.html");
});

app.get("/api",function(req,res){
  res.send("Hello from API");
});

app.listen(3000,function(){
  console.log("Listening on Port 3000")
})
