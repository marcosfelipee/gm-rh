const Cargo = require('../app/models/Cargo')

exports.get = async () => {
  const res = await Cargo.find()
  return res
}

exports.getById = async (id) => {
  const res = await Cargo.findById(id)
  return res
}

exports.post = async(data) =>{
  const cargo = new Cargo(data)
  await cargo.save()
}

exports.put = async(id, data) =>{
  await Cargo.findByIdAndUpdate(id, {
    $set:{
      descricao: data.descricao,
      salario: data.salario,
      codigoCBO: data.codigoCBO,
      setor: data.setor
    }
  })
}

exports.delete = async(id) =>{
  await Cargo.findByIdAndDelete(id)
}