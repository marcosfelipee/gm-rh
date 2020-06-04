const repository = require('../repositories/cargo-repository')

exports.post = async (req, res) => {

  try {
    await repository.post({
      descricao: req.body.descricao,
      salario: req.body.salario,
      codigoCBO: req.body.codigoCBO,
      setor: req.body.setor
    })
    res.status(201).send({
      message: 'Cargo cadastrado com sucesso'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao inserir um cargo',
      erro: error
    })

  }

}

exports.getAll = async (req, res) => {
  try {
    var data = await repository.get()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({
      message: 'Falha na requisição',
      erro: error
    })
  }
}

exports.getById = async (req, res) => {
  try {
    const id = req.params.cargoId
    var data = await repository.getById(id)
    res.status(200).send(data)
  } catch (error){
    if (data == null){
      res.status(400).json({
        message: 'Cargo não encontrado! Verifique se o ID é válido!'
      })
    } else {
      res.status(500).send({
        message: 'Falha na requisição',
        erro: error
      })
    }
  }

}

exports.put = async (req, res) => {
  try {
    const id = req.params.cargoId
    const data = await repository.put(id, req.body)
    res.status(200).send({
      message:'Cargo atualizado com sucesso',
      dados: data
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha na requisição',
      erro: error
    })
  }
}


//DELETE - controller
exports.delete = async (req, res) =>{
  try {
    const id = req.params.cargoId
    await repository.delete(id)
    res.status(200).send({
      message:'Cargo removido com sucesso',
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha na requisição',
      erro: error
    })
  }

}