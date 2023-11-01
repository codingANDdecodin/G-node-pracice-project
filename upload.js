const fs=require('fs')
const http=require('http')

http.Server((req,res)=>{
if(req.method==='POST' && req.url==='/upload'){
    let body='';
 req.on('data',(chunk)=>{
    body+=chunk;
 })
 req.on('end',()=>{
    fs.writeFile('myfile.txt',body,(err)=>{
       if(err){
        res.statusCode=500;
        res.end(err)
       }else{
        res.statusCode=200;
        res.end('data uploaded successfully'+body)
       }
    })
 })
}else{
    res.statusCode=404;
    res.end('page not found')
}
}).listen(3000,()=>{
    console.log('listing....')
})