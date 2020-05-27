const express = require('express')
var router = express.Router(); //interceptação das rotas
const avaliacaoController = require('../controllers/avaliacao-controller');

//POST
router.post("/", avaliacaoController.post);

//GET ALL
router.get("/", avaliacaoController.getAll);

//GET BY ID
router.get("/:avaliacaoId", avaliacaoController.getById);

router.put("/:avaliacaoId", avaliacaoController.put);

router.delete("/:avaliacaoId", avaliacaoController.delete);

module.exports = router;