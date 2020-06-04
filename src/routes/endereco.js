const {Router} = require('express')
var router = Router()
const enderecoController = require('../controllers/endereco-controller')

router.post('/', enderecoController.post)
router.get('/', enderecoController.getAll)
router.get('/:enderecoId', enderecoController.getById)
router.put('/:enderecoId', enderecoController.put)
router.delete('/:enderecoId', enderecoController.delete)

module.exports = router