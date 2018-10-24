const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProdutoSchema = new Schema({
    descricao: {type: String, required: true, max: 100},
    preco: {type: number, required: true},
    pedidos: {type: [Pedido], required: true},
});


// Export the model
module.exports = mongoose.model('Produto', ProdutoSchema);