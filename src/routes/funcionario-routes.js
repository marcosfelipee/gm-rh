const express = require('express')
var router = express.Router(); //interceptação das rotas
const funcionarioController = require('../controllers/funcionario-controller');

//POST
router.post("/", funcionarioController.post);

//GET ALL
router.get("/", funcionarioController.getAll);

//GET BY ID
router.get("/:funcionarioId", funcionarioController.getById);

router.put("/:funcionarioId", funcionarioController.put);

router.delete("/:funcionarioId", funcionarioController.delete);

module.exports = router;