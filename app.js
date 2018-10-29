
var service = require('./service/baseService');
var Atribute = require('./service/atribute');


var atributos = [];
var atributosValores = [];

atributos.push(new Atribute('nome', 'varchar(50)', false, null));
atributos.push(new Atribute('idade', 'int', true, null));

atributosValores.push(new Atribute(name = 'nome', value = 'josé'));
atributosValores.push(new Atribute(name = 'idade', value = 30));

// service.createTable('Eu', atributos);
service.insertInto('Eu', atributosValores);