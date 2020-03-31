const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
    title: {
        type: String,
        required: [true]
    },
    TUE: {
        type: String
    }
});

//create model for todo
const Test = mongoose.model("test2", TodoSchema);

module.exports = Test;
