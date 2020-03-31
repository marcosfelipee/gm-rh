const { Router } = require('express');
const Cargo = require('../app/models/cargo');
const Funcionario = require('../app/models/funcionario');

const route = Router();

route.get('/', async (req, res) => {
  try {
    const cargos = await Cargo.find();

    for(let cargo of cargos) {
      cargo.funcionarios = await Funcionario.findById(cargo.funcionario_id);
    }

    res.status(200).json({ cargos });
  } catch(err) {
    res.status(500).json({
      erro: "Erro ao buscar cargos"
    })
  }
});

route.get('/:id', async (req, res) => {
  const { id } = req.query;

  try {
    const cargo = await Cargo.findById(id).populate('Funcionarios');

    res.status(200).json({ cargo });
  } catch(err) {
    res.status(500).json({
      erro: "Erro ao buscar cargos"
    })
  }
});

module.exports = route;