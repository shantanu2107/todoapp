const express=require("express");
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

const app=express();

app.post("/todo", function(req,res){
 const createPayLoad=req.body;
 const parsedPayLoad=createTodo.safeParse(createPayLoad);
 if(!parsedPayLoad.success){
    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
    return;
 }

})

app.get("/todo", function(req,res){


})

app.put("/completed", function(req,res){
 const updatePayLoad=req.body;
 const parsedPayLoad= updateTodo.safeParse(updatePayLoad);
 if(!parsedPayLoad.success){
    res.status(411).json({
        msg: "You sent the wrong data",
    })
    return;
 }


})