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

    updateOne: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
          devoured: true
        }, condition, cb);
      }
}

module.exports = burger;