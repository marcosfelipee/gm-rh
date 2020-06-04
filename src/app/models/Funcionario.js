var mongoose = require('mongoose')
var Schema = mongoose.Schema

var funcionarioSchema = new Schema({
  nome: String,
  sobrenome: String,
  dtNasc: String,
  sexo: {
    type: String,
    enum: ['Masculino', 'Feminino']
  },
  rg: String,
  cpf: String,
  telCelular: String,
  dtAdmissao: String,
  endereco: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Endereço',
  },
  cargo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cargo',
  }
})

module.exports = mongoose.model('Funcionário', funcionarioSchema)