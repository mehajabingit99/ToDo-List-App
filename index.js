//import all necessory dependencies
const express = require('express')
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

//configure DOT ENV
dotenv.config();
const app = express() //server created
app.use(bodyParser.json())//middleware
app.use(cors())//CROSS-ORIGIN 

//database connectivity
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected"))
.catch(err=>console.log("Error while connecting",err))

const PORT = process.env.PORT || 5000

//routes for user api
app.use('/api/user',require('./Routes/userRoutes'));

//routes for to-do api
app.use('/api/todo',require('./Routes/todoRoutes'));


//server started
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})