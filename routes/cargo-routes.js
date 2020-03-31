const { Router } = require("express");
const Cargo = require("../app/models/cargo");

const route = Router();

route.get("/", async (req, res) => {
  try {
    const cargos = await Cargo.find();

    return res.status(200).json({ cargos })
  } catch(err) {
    return res.status(500).json({ 
      message: "erro ao buscar cargos",
    });
  }
});

route.post("/", async (req, res) => {
  const cargoModel = new Cargo();

  try {
    const { cargo, descricao, salario, setor, codigoCBO } = req.body;

    cargoModel.cargo = cargo;
    cargoModel.descricao = descricao;
    cargoModel.salario = salario;
    cargoModel.setor = setor;
    cargoModel.codigoCBO = codigoCBO;

    await cargoModel.save();

    res.status(201).json({
      message: 'Cargo criado com sucesso!'
    })
  } catch(err) {
    return res.status(500).json({ 
      message: "erro ao criar cargo",
    })
  }
});

module.exports = route;
