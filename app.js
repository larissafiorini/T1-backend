
var service = require('./service/baseService');
var Atribute = require('./service/atribute');
var Column = require('./service/column');
var TypeEnum = require('./service/typeEnum');


var atributos = [];
var atributosValores = [];


atributos.push(new Column('rua', TypeEnum.string, null, false));
atributos.push(new Column('numero', TypeEnum.int, null, true));

atributosValores.push(new Atribute(name = 'rua', value = 'plinio'));
atributosValores.push(new Atribute(name = 'numero', value = 201));

// service.createTable('endereco', atributos);
// service.insertInto('endereco', atributosValores);
// var teste
// service.findAll('Eu').then((value) => { 
//     teste = value
//     console.log(teste);
// });
// service.update('Eu', new Atribute(name = 'idade', value = 24), 3).then((value) => { 
//     teste = value
//     console.log(teste);
// });
service.delete('Eu', 2);


// service.findById('Eu', 3)

// console.log(teste);
// teste
