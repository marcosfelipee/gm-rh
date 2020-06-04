const {model, Schema} = require('mongoose')

const funcionarioSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'Endereço',
  },
  cargo: {
    type: Schema.Types.ObjectId,
    ref: 'Cargo',
  },
})

module.exports = model('Funcionário', funcionarioSchema)