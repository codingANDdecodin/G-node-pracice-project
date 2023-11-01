const express=require("express")
const homeControler =require("../controlers/controler")
const app=express();
const router=express.Router();

router.get("/", homeControler);

module.exports=router;