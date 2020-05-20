var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enderecoSchema = new Schema({
    id_endereco: Number,
    rua: String,
    cidade: String,
    estado: String,
    cep: String,
    rua: String

});

module.exports = mongoose.model('Endereço', enderecoSchema);