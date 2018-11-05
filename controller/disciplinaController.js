var BaseController = require('./baseController');

class DisciplinaController extends BaseController {

    async findByProfessor(req, res) {
        try {
            const path = req.url.substr(1);
            const pathData = path.split('/');
            const id = pathData[1];
            sql = "select d.id, d.nome, d.curso " 
            sql += "from disciplina d inner join disciplina_professor dp on d.id = dp.id_disciplina "
            sql += "innse join professor p on dp.id_professor = p.id "
            sql += `where p.id = ${id}`;
            const data = await selectService.query(sql);
            if (data.length == 0) {
                return res.status(500).send({ error: `${tableName} with id ${id} not found` });
            }
            return res.send(data);
        } catch (error) { 
            return error
          .status(500)
          .json({ error: 'Ocorreu um erro ao buscar a lista de professores' });
      }
    }

}

module.exports = DisciplinaController