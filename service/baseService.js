let mysql  = require('mysql');
let config = require('../node-mysql/config.js');

module.exports = {

    createTable(name, atributes){
        let connection = mysql.createConnection(config);
        let sql = `create table if not exists ${name}(
            id int primary key auto_increment,`
            console.log(atributes)
        for(var i = 0; i < atributes.length; i++) {
            let isNull = atributes[i].isNull ? '' : 'not null';
            let value = !!atributes[i].value ? `default ${value}` : '';
            sql += `${atributes[i].name} ${atributes[i].type.value} ${isNull} ${value},`
        }
        
        sql = sql.substring(0, sql.length-1);
        sql += ')';
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
    },

    insertInto(tableName, atributes) { 
        let connection = mysql.createConnection(config);
        
        sql = `insert into ${tableName} (`
        for(var i = 0; i < atributes.length; i++) {
            sql += `${atributes[i].name},`
        }
        sql = sql.substring(0, sql.length-1);
        sql += ') VALUES (';
        for(var i = 0; i < atributes.length; i++) {            
            sql += `'${atributes[i].value}',`
        }
        sql = sql.substring(0, sql.length-1);
        sql += ')';
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
    },

    findAll(tableName) {
            let connection = mysql.createConnection(config);
            sql = `select * from ${tableName}`;
            connection.query(sql, function(err, results, fields) {
                if (err) {
                    console.log(err.message);
                } 
                console.log(results[0].id);
                console.log(results[0].nome);
                console.log(results[0].idade);
                console.log(String(results[0].id));
                return String(results[0].id);
            });
            connection.end(function(err) {
                if (err) {
                    return console.log(err.message);
                }
            }); 
        },
    deleteRow(tableName, row_name, row_value) { 
        let connection = mysql.createConnection(config);

        sql = `delete from ${tableName} WHERE ${row_name} = ${row_value}`
        
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
    },
    updateRow(tableName, row_name,row_value ,new_row_name, new_row_value) { 
        let connection = mysql.createConnection(config);

        sql = `update ${tableName} set ${new_row_name} = '${new_row_value}' where ${row_name} = '${row_value}' ;`
        
        console.log(sql);
        connection.query(sql, function(err, results, fields) {
            if (err) {
                console.log(err.message);
            }
            console.log(results);
        });
    
        connection.end(function(err) {
            if (err) {
                return console.log(err.message);
            }
        }); 
    }

    
}

