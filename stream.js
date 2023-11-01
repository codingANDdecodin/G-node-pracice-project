var http=require("http");
var fs=require("fs");

const server=http.createServer();

server.on("request",(req,res)=>{
    const readData=fs.createReadStream("ajit.txt");

    // readData.on("data",(chunk)=>{
    //     res.write(chunk);
    //     console.log("ok")
    // })

    // readData.on("end",()=>{
    //     res.end();
    // });

    // readData.on("error",(err)=>{
    //     console.log(err)
    //     res.end("file not found")
    // })
    readData.pipe(res)


})
server.listen(8000);