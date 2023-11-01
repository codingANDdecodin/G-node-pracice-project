const os= require("os");

// const totammemory=os.totalmem()/1024/1024/1024;
// console.log(totammemory)

const remainmem=os.freemem()/1024/1024/1024;
console.log(remainmem)

console.log(os.arch());
console.log(os.hostname())
console.log(os.type())