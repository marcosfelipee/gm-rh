const {Router} = require('express')
var router = Router()
const cargoController = require('../controllers/cargo-controller')

router.post('/', cargoController.post)
router.get('/', cargoController.getAll)
router.get('/:cargoId', cargoController.getById)
router.put('/:cargoId', cargoController.put)
router.delete('/:cargoId', cargoController.delete)

module.exports = router