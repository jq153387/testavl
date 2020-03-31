const express = require("express");
const router = express.Router();
const List = require("../models/Test");

router.get("/test", (req, res, next) => {
    //this will return all the data, exposing only the id and action field to the client
    List.find({})
        .then(data => {
            console.log(data);

            return res.json(data);
        })
        .catch(next);
    // List.find({}, function(err, users) {
    //     res.render("/usersList", { users: users });
    // });
});

module.exports = router;
