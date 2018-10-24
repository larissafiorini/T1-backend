let mysql  = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');

  let createTodos = `create table if not exists todos(
        id int primary key auto_increment,
        title varchar(255)not null,
        completed tinyint(1) not null default 0
    )`;

    connection.query(createTodos, function(err, results, fields) {
        if (err) {
            console.log(err.message);
        }
    });

    connection.end(function(err) {
        if (err) {
            return console.log(err.message);
        }
    }); 
});