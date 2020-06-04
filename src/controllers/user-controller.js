const repository = require('../repositories/user-repository')

exports.post = async (req, res) => {
  const {name, email, password} = req.body

  try {
    await repository.create({name, email, password})

    return res.status(201).json({message: 'Usuário criado com sucesso.'})
  } catch (error) {
    return res.status(500).json({error})
  }
}