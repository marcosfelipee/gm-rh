const  {model, Schema} = require('mongoose')

const cursoSchema = new Schema({
  titulo: String,
  descricao: String,
  dtInicio: String,
  dtFim: String,
  horasTotais: Number,
  participantes: String
})

module.exports = model('Curso', cursoSchema)