const Avaliacao = require('../app/models/Avaliacao')

exports.get = async () => {
  return Avaliacao.find().populate('funcionario')
}

exports.getById = async (id) => {
  return Avaliacao.findById(id).populate('funcionario')
}

exports.post = async(data) =>{
  const avaliacao = new Avaliacao(data)
  await avaliacao.save()
}

exports.put = async(id, data) =>{
  await Avaliacao.findByIdAndUpdate(id, {
    $set:{
      descricao: data.descricao,
      nota: data.nota,
      funcionario: data.funcionario
    }
  })
}

exports.delete = async(id) =>{
  await Avaliacao.findByIdAndDelete(id)
}