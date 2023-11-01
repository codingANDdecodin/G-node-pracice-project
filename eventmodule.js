const event=require("events");
const eventEmitter=new event();

eventEmitter.on("myfun",()=>{
    console.log("hiii sucessful boy")
})
eventEmitter.emit("myfun")

eventEmitter.on("exp",(a,b)=>{
    console.log("a is ",a, "b is ",b)
})
eventEmitter.emit("exp",12,1)