const express=require("express");

const app=express();

app.set("view engine","ejs");
var obj={name:"a",work:"b",skills:["cpp","js","java"]}
app.get("/",(req,res)=>{
    res.render("temp1",obj);
});
app.listen(8000);