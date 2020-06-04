const {Router} = require('express')
var router = Router()
const funcionarioController = require('../controllers/funcionario-controller')

router.post('/', funcionarioController.post)
router.get('/', funcionarioController.getAll)
router.get('/:funcionarioId', funcionarioController.getById)
router.put('/:funcionarioId', funcionarioController.put)
router.delete('/:funcionarioId', funcionarioController.delete)

module.exports = router