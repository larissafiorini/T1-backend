var express = require('express');
var service = require('./service/baseService');
var Atribute = require('./service/atribute');
var Column = require('./service/column');
var ForeignKey = require('./service/foreignKey');
var TypeEnum = require('./service/typeEnum');
var create = require('./service/create');
var insert = require('./service/insert');
var select = require('./service/select');
var update = require('./service/update');
var del = require('./service/delete');
var Disciplina = require('./disciplina');
var BaseController = require('./controller/baseController');
var DisciplinaController = require('./disciplinaController');
const router = express.Router();

const app = express();
// var atributos = [];
// var atributosValores = [];
// var foreignKeys = [];

// atributos.push(new Column('nome', TypeEnum.string, null, false));
// atributos.push(new Column('curso', TypeEnum.string, null, true));
// atributos.push(new Column('id_eu', TypeEnum.int, null, true));
// foreignKeys.push(new ForeignKey('fk_disciplina_eu', 'id_eu', 'eu', 'id'));

// atributosValores.push(new Atribute(name = 'nome', value = 'matemática'));
// atributosValores.push(new Atribute(name = 'curso', value = 'engenharia'));
// atributosValores.push(new Atribute(name = 'id_eu', value = '1'));

// create.createTable('disciplina', atributos, foreignKeys);
// var disciplina = new Disciplina('ciências', 'física', 1);
// console.log(disciplina);
// var baseController = new BaseController('disciplina');
// baseController.insert(disciplina, 'disciplina');
var disciplinaController = new DisciplinaController();

console.log(disciplinaController);
router.get('/disciplina', disciplinaController.findAll);
router.get('/disciplina/:id', disciplinaController.findById);
router.post('/disciplina', disciplinaController.insert);
router.put('/disciplina/:id', disciplinaController.update);
router.delete('/disciplina/:id', disciplinaController.delete);

app.use('/api', router);
module.exports = app;

// insert.insertInto('disciplina', atributosValores);

// select.query('select e.nome from eu e inner join disciplina d on d.id_eu = e.id;').then((res) => {
//     console.log(res);
// });

// // var teste
// select.findAll('Eu').then((value) => { 
//     teste = value
//     console.log(teste);
//  });
// update.update('Eu', new Atribute(name = 'idade', value = 24), 3).then((value) => { 
//     teste = value
//      console.log(teste);
//  });
// del.delete('Eu', 1);


// service.findById('Eu', 3)

// console.log(teste);
// teste
