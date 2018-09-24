var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'teste',
        password: 'fbi312',
        database: 'checklist',
        insecureAuth : true
    });
}
module.exports = function(){
    return createDBConnection;
}