
var service = require('./service/baseService');
var Atribute = require('./service/atribute');
var Column = require('./service/column');
var TypeEnum = require('./service/typeEnum');


var atributos = [];
var atributosValores = [];


atributos.push(new Column('rua', TypeEnum.string, null, false));
atributos.push(new Column('numero', TypeEnum.int, null, true));

atributosValores.push(new Atribute(name = 'rua', value = 'victor kessler'));
atributosValores.push(new Atribute(name = 'numero', value = 31));

//service.createTable('endereco', atributos);
//service.insertInto('endereco', atributosValores);
//var teste = service.findAll('Eu');
service.deleteRow('endereco','id','2');
// console.log(teste);
// teste
