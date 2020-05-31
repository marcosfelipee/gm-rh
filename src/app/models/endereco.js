var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enderecoSchema = new Schema({
    logradouro: String,
    numero: Number,
    cidade: String,
    estado: String,
    cep: String,
});

module.exports = mongoose.model('Endereço', enderecoSchema);