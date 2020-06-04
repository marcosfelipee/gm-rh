const Funcionario = require('../app/models/Funcionario')

exports.get = async () => {
  const funcionarios = await Funcionario.find().populate('cargo')

  return funcionarios
}

exports.getById = async (id) => {
  const res = await Funcionario.findById(id).populate('cargo')
  return res
}

exports.post = async(data) =>{
  const avaliacao = new Funcionario(data)
  await avaliacao.save()
}

exports.put = async(id, data) =>{
  await Funcionario.findByIdAndUpdate(id, {
    $set:{
      nome: data.nome,
      sobrenome: data.sobrenome,
      dtNasc: data.dtNasc,
      sexo: data.sexo,
      rg: data.rg,
      cpf: data.cpf,
      telCelular: data.telCelular,
      dtAdmissao: data.dtAdmissao,
      endereco: data.endereco,
      cargo: data.cargo
    }
  })
}

exports.delete = async(id) =>{
  await Funcionario.findByIdAndDelete(id)
}