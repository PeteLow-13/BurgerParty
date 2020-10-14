const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', cb);
    },
    insertOne: function(name, cb) {
        orm.insertOne('burgers', ['burger_name', 'devoured'],[ name, false ],cb); 
    },
    updateOne: function(id, cb) {
        var condition = 'id=' + id;
        orm.updateOne('burgers', { devoured: true }, condition, cb); 
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne('burgers', condition, cb);
    }
};

module.exports = burger