var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cargoSchema = new Schema({ 
    id_cargo: Number,
    descricao: String,
    salario: Number,
    codigoCBO: String,
    setor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Setor",
      },
  });

module.exports = mongoose.model('Cargo', cargoSchema);
