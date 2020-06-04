const repository = require('../repositories/endereco-repository')

exports.post = async (req, res) => {

  try {
    await repository.post({
      logradouro: req.body.logradouro,
      numero: req.body.numero,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep
    })
    res.status(201).send({
      message: 'Endereço cadastrado com sucesso'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao inserir um endereço',
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
    const id = req.params.enderecoId
    var data = await repository.getById(id)
    res.status(200).send(data)
  } catch (error) {
    if (data == null) {
      res.status(400).json({
        message: 'Endereço não encontrado! Verifique se o ID é válido!'
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
    const id = req.params.enderecoId
    const data = await repository.put(id, req.body)
    res.status(200).send({
      message: 'Endereço atualizado com sucesso',
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
exports.delete = async (req, res) => {
  try {
    const id = req.params.enderecoId
    await repository.delete(id)
    res.status(200).send({
      message: 'Endereço removido com sucesso',
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha na requisição',
      erro: error
    })
  }

}