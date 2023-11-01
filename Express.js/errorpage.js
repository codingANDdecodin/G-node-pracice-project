const express=require("express");

const app=express();

app.set("view engine","ejs");
var obj={name:"a",work:"b",skills:["cpp","js","java"]}
app.get("/",(req,res)=>{
    res.render("temp1",obj)
})

app.get("/contact",(req,res)=>{
    res.render("index");
})

app.get("/contact/*",(req,res)=>{
    res.render("404",{errormsg:"page not found this is last path"});
})

app.get("/*",(req,res)=>{
    res.render("404",{errormsg:"i am from universal opreatot"})
})

app.listen(8000,()=>{
    console.log("runnning successfully!")
})