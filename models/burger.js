const orm = require("../config/orm.js")

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(name, devoured, cb) {
        orm.insertOne("burgers", [
            "burger_name",
            "devoured"
        ], [
            name, devoured
        ], cb)
    },

    updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res){
        cb(res)
    })
}
}

module.exports = burger;