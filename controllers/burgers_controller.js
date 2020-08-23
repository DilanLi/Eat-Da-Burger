const express = require("express");

const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data){
        console.log(data);
        res.render("index", { burger_data: data});
    })
})

router.post("/api/burgers", function (req, res) {
    console.log("req.body: " + req.body.burger_name + " req.devoured: " + req.body.devoured);
    burger.insertOne(req.body.burger_name, req.body.devoured, function (result) {
        res.json({ id: result.insertId });
        console.log(res)
    });
})

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id =" + req.params.id;

    console.log("condition: ", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;