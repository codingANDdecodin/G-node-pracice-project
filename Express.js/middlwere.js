const express=require("express");
const app=express();
const router =express.Router();

const midfun=(req,res,next)=>{
    res.write('i come from midfunction ');
    next()
}

router.use(midfun);

router.get("/",(req,res)=>{
    res.end("hiiiiiiiiiiiiiiiiiii")
})
router.get("/contact",(req,res)=>{
    res.end("hiiii from contact")
})

router.get("/*",(req,res)=>{
    res.end(" page not found but middlwew is -")
})
app.use("/",router);
app.listen(8000);