var BaseController = require('./baseController');

class ProfessorController extends BaseController {

    async findByDisciplina(req, res) {
        try {
            const path = req.url.substr(1);
            const pathData = path.split('/');
            const id = pathData[2];
            sql = "select p.id, p.nome, p.idade " 
            sql += "from disciplina d inner join disciplina_professor dp on d.id = dp.id_disciplina "
            sql += "innse join professor p on dp.id_professor = p.id "
            sql += `where d.id = ${id}`;
            const data = await selectService.query(sql);
            if (data.length == 0) {
                return res.status(500).send({ error: `professor not found` });
            }
            return res.send(data);
        } catch (error) { 
            return error
          .status(500)
          .json({ error: 'Ocorreu um erro ao buscar a lista de professores' });
      }
    }

}

module.exports = ProfessorController