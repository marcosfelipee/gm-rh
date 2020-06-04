const express = require('express')
var router = express.Router() //interceptação das rotas
const enderecoController = require('../controllers/endereco-controller')

//POST
router.post('/', enderecoController.post)

//GET ALL
router.get('/', enderecoController.getAll)

//GET BY ID
router.get('/:enderecoId', enderecoController.getById)

router.put('/:enderecoId', enderecoController.put)

router.delete('/:enderecoId', enderecoController.delete)

module.exports = router