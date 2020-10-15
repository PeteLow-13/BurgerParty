const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'pazcyj2hrrp1vjja',
        password: 't23xp1vakrloehtr',
        database: 'mxrchfeuk7wa4mp8'
});
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting');
        return;
    }
    console.log('connected as id ' + connection.threadId)
});

module.exports = connection;