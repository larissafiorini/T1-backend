
var service = require('./service/baseService');
var Atribute = require('./service/atribute');
var Column = require('./service/column');
var TypeEnum = require('./service/typeEnum');
var create = require('./service/create');
var insert = require('./service/insert');
var select = require('./service/select');
var update = require('./service/update');
var del = require('./service/delete');


var atributos = [];
var atributosValores = [];


atributos.push(new Column('rua', TypeEnum.string, null, false));
atributos.push(new Column('numero', TypeEnum.int, null, true));

atributosValores.push(new Atribute(name = 'rua', value = 'plinio'));
atributosValores.push(new Atribute(name = 'numero', value = 201));

create.createTable('teste', atributos);


insert.insertInto('endereco', atributosValores);

// var teste
select.findAll('Eu').then((value) => { 
    teste = value
    console.log(teste);
 });
update.update('Eu', new Atribute(name = 'idade', value = 24), 3).then((value) => { 
    teste = value
     console.log(teste);
 });
del.delete('Eu', 1);


// service.findById('Eu', 3)

// console.log(teste);
// teste
