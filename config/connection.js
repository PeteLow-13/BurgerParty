const mysql = require('mysql');

var db = mySql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Chauncit03',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting');
        return;
    }
    console.log('connected as id ' + connection.threadId)
});

module.exports = connection;