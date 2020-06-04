const  {model, Schema} = require('mongoose')

const enderecoSchema = new Schema({
  logradouro: String,
  numero: Number,
  cidade: String,
  estado: String,
  cep: String,
})

module.exports = model('Endereço', enderecoSchema)