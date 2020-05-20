var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var avaliacaoSchema = new Schema({
    descricao: String,
    nota: Number,
    funcionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Funcionário",
    },
});

module.exports = mongoose.model('Avaliacao', avaliacaoSchema);