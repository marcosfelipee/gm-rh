const express = require('express')
var router = express.Router(); //interceptação das rotas
const avaliacaoController = require('../controllers/avaliacao-controller');

//POST
router.post("/", avaliacaoController.post);

//GET ALL
router.get("/", avaliacaoController.getAll);

//GET BY ID
router.get("/:userId", avaliacaoController.getById);

router.put("/:userId", avaliacaoController.put);

router.delete("/:userId", avaliacaoController.delete);

module.exports = router;