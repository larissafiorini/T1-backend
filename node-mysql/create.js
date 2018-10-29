let mysql  = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

let sql = `create table if not exists exemplo(
    id int primary key auto_increment,
    title varchar(255)not null,
    completed tinyint(1) not null default 0
)`


connection.query(sql);
 
connection.end();