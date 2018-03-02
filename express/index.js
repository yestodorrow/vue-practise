var express=require('express')
var app=express();
app.get('/',(req,res)=>{
    res.header("Content-Type", "application/json;charset=utf-8");
    res.send(
        'hello'
    )
}).listen(8002,()=>{
    console.log("listening on 8002")
})