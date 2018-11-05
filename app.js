var bodyParser = require('body-parser')
var express = require('express');
var config = require('./config');
var createTables = require('./createTables');
var BaseController = require('./controller/baseController');
var DisciplinaController = require('./controller/disciplinaController');
var ProfessorController = require('./controller/professorController');
const router = express.Router();

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });

if (config.updateDatabase) {
    createTables.createTables();
}

//create here your routes

var disciplinaController = new DisciplinaController();
var professorController = new ProfessorController();

router.get('/disciplina', disciplinaController.findAll)
router.get('/disciplina/:id', disciplinaController.findById)
router.post('/disciplina', disciplinaController.insert)
router.put('/disciplina/:id', disciplinaController.update)
router.delete('/disciplina/:id', disciplinaController.delete)
router.get('/disciplina/find_by_professor/:id', disciplinaController.findByProfessor)

router.get('/professor', professorController.findAll)
router.get('/professor/:id', professorController.findById)
router.post('/professor', professorController.insert)
router.put('/professor/:id', professorController.update)
router.delete('/professor/:id', professorController.delete)

app.use(bodyParser.json());
app.use('/api', router);
module.exports = app;