let mysql  = require('mysql');
let config = require('./node-mysql/config.js');
var Column = require('./service/column');
var ForeignKey = require('./service/foreignKey');
var create = require('./service/create');
var TypeEnum = require('./service/typeEnum');

module.exports = {
    async resetDatabase() {
        let connection = mysql.createConnection(config);

        // await connection.query(`drop database ${config.database}`, function(err, results, fields) {
        //     if (err) {
        //         console.log(err.message);
        //     } else {
        //         console.log(results);
        //     }
        // });

        await connection.query(`create database ${config.database}`, function(err, results, fields) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(results);
            }
        });        
    },
    async createTables() {

        var columnsProfessor = [];
        columnsProfessor.push(new Column('nome', TypeEnum.string, null, false));
        columnsProfessor.push(new Column('diploma', TypeEnum.string, null, true));
        await create.createTable('professor', columnsProfessor);

        var columnsDisciplina = [];
        columnsDisciplina.push(new Column('nome', TypeEnum.string, null, false));
        columnsDisciplina.push(new Column('curso', TypeEnum.string, null, true));
        await create.createTable('disciplina', columnsDisciplina);

        var foreignKeys = [];
        var columnsDisciplinaProfessor = []
        columnsDisciplinaProfessor.push(new Column('id_disciplina', TypeEnum.int, null, false));
        columnsDisciplinaProfessor.push(new Column('id_professor', TypeEnum.int, null, false));
        foreignKeys.push(new ForeignKey('fk_disciplina_professor_disciplina', 'id_disciplina', 'disciplina'));
        foreignKeys.push(new ForeignKey('fk_disciplina_professor_professor', 'id_professor', 'professor'));
        await create.createTable('disciplina_professor', columnsDisciplinaProfessor, foreignKeys);
    }
}