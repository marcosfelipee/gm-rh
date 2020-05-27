var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cargoSchema = new Schema({ 
    descricao: String,
    salario: Number,
    codigoCBO: String,
    setor: String,
  });

module.exports = mongoose.model('Cargo', cargoSchema);
