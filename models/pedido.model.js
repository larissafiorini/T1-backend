const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PedidoSchema = new Schema({
    nomeCliente: {type: String, required: true, max: 100},
    data: {type: Date, required: true},
    produtos: {type: [Produto], required: true},
});


// Export the model
module.exports = mongoose.model('Pedido', PedidoSchema);