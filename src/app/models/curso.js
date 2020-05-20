var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cursoSchema = new Schema({
    titulo: String,
    descricao: String,
    dtInicio: String,
    dtFim: String,
    horasTotais: Number,
    participantes: String
});

module.exports = mongoose.model('Curso', cursoSchema);