// var select = require('../service/select');
var insertService = require('../service/insert');
var Atribute = require('../service/atribute');

module.exports = {

    insert(object, tableName) {
        atributes = [];
        for (var atribute in object) {
            atributes.push(new Atribute(name = atribute, value = object[atribute]));
        }
        console.log(atributes);
        insertService.insertInto(tableName, atributes);
    }
}
