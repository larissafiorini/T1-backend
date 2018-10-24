let mysql  = require('mysql');
let config = require('../node-mysql/config.js');





module.exports = {
    create: name => {
        let connection = mysql.createConnection(config);
        let sql = `create table if not exists ${name}(
            id int primary key auto_increment,
            title varchar(255)not null,
            completed tinyint(1) not null default 0
        )`;

        connection.query(sql, function(err, results, fields) {
            if (err) {
                console.log(err.message);
            }
        });
    
        connection.end(function(err) {
            if (err) {
                return console.log(err.message);
            }
        }); 
    }
}