var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var setorSchema = new Schema({
    id_setor: Number,
    descricao: String
});

module.exports = mongoose.model('Setor', setorSchema);