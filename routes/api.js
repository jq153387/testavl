const express = require("express");
const router = express.Router();
const Todo = require("../models/Test");

router.get("/Test", (req, res, next) => {
    //this will return all the data, exposing only the id and action field to the client
    Todo.find({}, "action")
        .then(data => res.json(data))
        .catch(next);
});

module.exports = router;
