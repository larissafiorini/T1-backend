// const select = require('../service/select');
const insertService = require('../service/insert');
const updateService = require('../service/update');
const selectService = require('../service/select');
const deleteService = require('../service/delete');
const Atribute = require('../service/atribute');

class BaseController {

    async findAll(req, res) {
        try {
            const tableName = req.route.path.substr(1);
            const data = await selectService.findAll(tableName);
            return res.send(data);
        } catch (error) { 
            return error
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: 'Ocorreu um erro ao buscar a lista de professores' });
      }
    }

    async findById(req, res) {
        try {
            const path = req.url.substr(1);
            const pathData = path.split('/');
            const tableName = pathData[0];
            const id = pathData[1];
            const data = await selectService.findById(tableName, id);
            return res.send(data);
        } catch (error) { 
            return error
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: 'Ocorreu um erro ao buscar a lista de professores' });
      }
    }

    async insert(req, res) {
        const tableName = req.route.path.substr(1);
        const atributes = [];
        console.log(req);
        const object = req.body; 
        console.log(object)
        for (let atribute in object) {
            atributes.push(new Atribute(atribute, object[atribute]));
        }
        insertService.insertInto(tableName, atributes);
    }

    async update(req, res) {
        const path = req.url.substr(1);
        const pathData = path.split('/');
        const tableName = pathData[0];
        const id = pathData[1];
        const atributes = [];
        const object = req.body; 
        console.log(object)
        for (let atribute in object) {
            atributes.push(new Atribute(atribute, object[atribute]));
        }
        updateService.update(tableName, atributes, id);
    }

    async delete(req, res) {
        const path = req.url.substr(1);
        const pathData = path.split('/');
        const tableName = pathData[0];
        const id = pathData[1];
        return res.send(deleteService.delete(tableName, id));
    }
}
module.exports = BaseController

