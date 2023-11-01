const http=require("http");
const { url } = require("inspector");


const server=http.createServer((req,res)=>{
//     res.write(req.url+" "+req.method)
//     res.write(" ho are u ")
//    res.end("hiii suceess!");
       if(req.url=="/"){
        res.end("welcome to home");
       }
       if(req.url=="/contact"){
        res.end("welcome to contact page");
       }
       if(req.url=="/about"){
        res.writeHead(200,{"Containt-type":"text/html"})
        res.end("<h1>hiiiiiiiiiiiiiiii</h1>");
       }
})
server.listen(8000,"localhost",()=>{
    console.log(" everythin is ok go to localhost");
})