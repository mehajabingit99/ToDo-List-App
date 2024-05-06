const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        dateCreated: {
            type: Date,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        },
        owner: {
            type: String,
        },
    }
)

//create model
const todoModel = mongoose.model("todoModel",todoSchema);
 //                               model name  schema name

module.exports = todoModel;