const express = require('express');
const { createTodo, deleteTodo, updateTodo, enableTodo, disableTodo } = require('../Controllers/todoController');

//create router
const router = express.Router();

//path for todo API's
router.post('/create',createTodo)

router.delete('/delete/:id',deleteTodo)

router.put('/update/:id',updateTodo)

router.put('/enable/:id',enableTodo)

router.put('/disable/:id',disableTodo)

//export router
module.exports = router;