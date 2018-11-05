var Column = require('./framework/service/column');
var ForeignKey = require('./framework/service/foreignKey');
var create = require('./framework/service/create');
var TypeEnum = require('./framework/service/typeEnum');

module.exports = {
    async createTables() {
        //define your tables here
        var disciplinaColumn = [];
        disciplinaColumn.push(new Column('nome', TypeEnum.string, null, false));
        disciplinaColumn.push(new Column('curso', TypeEnum.string, null, true));
        await create.createTable('disciplina', disciplinaColumn);

        var professorColumns = [];
        professorColumns.push(new Column('nome', TypeEnum.string, null, false));
        professorColumns.push(new Column('idade', TypeEnum.int, null, true));
        await create.createTable('professor', professorColumns);

        var foreignKeys = [];
        var columnsProfessorDisciplina = []
        columnsProfessorDisciplina.push(new Column('id_disciplina', TypeEnum.int, null, false));
        columnsProfessorDisciplina.push(new Column('id_professor', TypeEnum.int, null, false));
        foreignKeys.push(new ForeignKey('fk_disciplina_professor_disciplina', 'id_disciplina', 'disciplina'));
        foreignKeys.push(new ForeignKey('fk_disciplina_professor_professor', 'id_professor', 'professor'));
        await create.createTable('disciplina_professor', columnsProfessorDisciplina, foreignKeys);
    }
}