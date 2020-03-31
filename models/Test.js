const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, "The todo text field is required"]
    }
});

//create model for todo
const Test = mongoose.model("test02", TodoSchema);

module.exports = Test;
