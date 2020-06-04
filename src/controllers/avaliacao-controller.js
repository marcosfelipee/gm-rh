const repository = require('../repositories/avaliacao-repository')

exports.post = async (req, res) => {

  try {
    await repository.post({
      descricao: req.body.descricao,
      nota: req.body.nota,
      funcionario: req.body.funcionario
    })
    res.status(201).send({
      message: 'Avaliação inserida com sucesso'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao inserir uma avaliação',
      erro: error
    })
  }
}

exports.getAll = async (req, res) => {
  try {
    var data = await repository.get()

    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: 'Falha na requisição',
      erro: error
    })
  }
}

exports.getById = async (req, res) => {
  try {
    const id = req.params.avaliacaoId
    var data = await repository.getById(id)
    res.status(200).send(data)
  } catch (error){
    if (data == null){
      res.status(400).json({
        message: 'Avaliação não encontrada! Verifique se o ID é válido!'
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
    const id = req.params.avaliacaoId
    const data = await repository.put(id, req.body)
    res.status(200).send({
      message:'Avaliação atualizada com sucesso',
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
    const id = req.params.avaliacaoId
    await repository.delete(id)
    res.status(200).send({
      message:'Avaliação removida com sucesso',
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha na requisição',
      erro: error
    })
  }

}