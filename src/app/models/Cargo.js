const  {model, Schema} = require('mongoose')

const cargoSchema = new Schema({
  descricao: String,
  salario: Number,
  codigoCBO: String,
  setor: String,
})

module.exports = model('Cargo', cargoSchema)
