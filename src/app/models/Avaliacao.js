const  {model, Schema} = require('mongoose')

const avaliacaoSchema = new Schema({
  descricao: String,
  nota: Number,
  funcionario: {
    type: Schema.Types.ObjectId,
    ref: 'Funcionário',
  },
})

module.exports = model('Avaliacao', avaliacaoSchema)