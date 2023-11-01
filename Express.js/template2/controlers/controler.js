const homeControler=(req,res)=>{
    const obj={"name":"ajit","friend1":"ram","friend2":"sham"}
    res.render("index",obj)
}
module.exports=homeControler;