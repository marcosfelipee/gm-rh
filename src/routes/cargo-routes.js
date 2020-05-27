const express = require('express')
var router = express.Router(); //interceptação das rotas
const cargoController = require('../controllers/cargo-controller');

//POST
router.post("/", cargoController.post);

//GET ALL
router.get("/", cargoController.getAll);

//GET BY ID
router.get("/:cargoId", cargoController.getById);

router.put("/:cargoId", cargoController.put);

router.delete("/:cargoId", cargoController.delete);

module.exports = router;