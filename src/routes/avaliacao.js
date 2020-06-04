const {Router} = require('express')
var router = Router()
const avaliacaoController = require('../controllers/avaliacao-controller')

router.post('/', avaliacaoController.post)
router.get('/', avaliacaoController.getAll)
router.get('/:avaliacaoId', avaliacaoController.getById)
router.put('/:avaliacaoId', avaliacaoController.put)
router.delete('/:avaliacaoId', avaliacaoController.delete)

module.exports = router