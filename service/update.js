let mysql  = require('mysql');
let config = require('../node-mysql/config.js');

module.exports = {

update(tableName, atribute, id) {
    return new Promise(
        (resolve, reject) => {
        let connection = mysql.createConnection(config);
        sql = `update ${tableName} set ${atribute.name} = ${atribute.value} where id = ${id}`
        connection.query(sql, function(err, results, fields) {
            if (err) {
                reject(err.message);
            }
            else {
                resolve(results)
            }
        });
        connection.end(function(err) {
            if (err) {
                return console.log(err.message);
            }
        });
    })
},

updateRow(tableName, atribute ,new_atribute) { 
    let connection = mysql.createConnection(config);

    sql = `update ${tableName} set ${atribute.name} = '${atribute.value}' where ${new_atribute.name} = '${new_atribute.value}';`
    
    console.log(sql);
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
}}