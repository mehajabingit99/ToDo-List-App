const Todo = require('../Models/todoModel')//todoModel
const dotenv = require('dotenv').config()

const createTodo = async(req,res)=>{
    const todoBody = req.body;

    const todo = await Todo.create({
        title: todoBody.title,
        desc: todoBody.desc,
        active: todoBody.active,
        dateCreated: Date.now(),
        owner: todoBody.owner,
    });

    todo ? res.status(201).json({msg: "Success", data: todo}) : res.status(500).json({msg: "Error", data: todo})
}

const deleteTodo = async(req,res)=>{
    const todoId = req.params.id;
    const deletedTodo = await Todo.deleteOne({_id: todoId})

    deletedTodo ? res.status(200).json({msg: "Success", data: deletedTodo}) 
                : res.status(500).json({msg: "Error", data: deletedTodo}) 
}

const updateTodo = async(req,res)=>{
    const todoId = req.params.id;
    const updatedTodo = req.body;

    //                                         id            newtodo
    const todo = await Todo.findOneAndUpdate({_id: todoId}, updatedTodo);

    todo ?  res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
}

const enableTodo = async(req,res)=>{
    const todoId = req.params.id;
    const todo = await Todo.findOneAndUpdate({_id: todoId}, {active: true});

    todo ? res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
}

const disableTodo = async(req,res)=>{
    const todoId = req.params.id;
    const todo = await Todo.findOneAndUpdate({_id: todoId}, {active: false});

    todo ? res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
}
//export
module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    enableTodo,
    disableTodo
}