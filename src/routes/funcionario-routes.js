const express = require('express')
var router = express.Router(); //interceptação das rotas

var Funcionario = require("../app/models/funcionario");
var Cargo = require("../app/models/cargo");

router.post("/", function (req, res) {
    var func = new Funcionario();
    func.nome = req.body.nome;
    func.sobrenome = req.body.sobrenome;
    func.dtNasc = req.body.dtNasc;
    func.sexo = req.body.sexo;
    func.rg = req.body.rg;
    func.cpf = req.body.cpf;
    func.telCelular = req.body.telCelular;
    func.cep = req.body.cep;
    func.logradouro = req.body.logradouro;
    func.bairro = req.body.bairro;
    func.cidade = req.body.cidade;
    func.estado = req.body.estado;
    func.dtAdmissao = req.body.dtAdmissao;
    func.cargo = req.body.cargo;

    func.save(function (error) {
        if (error)
            res.send("Erro ao tentar inserir um funcionário" + error);

        res.status(201).json({ message: 'Funcionário inserido com sucesso' });

    });

});

router.get("/", function (req, res) {
    Funcionario.find(function (err, funcs) {
        if (err)
            res.send(err);

        res.status(200).json({
            message: 'Funcionários retornados',
            funcionario: funcs
        });
    }).populate('cargo');

});

//findById
router.get("/:funcionarioId", function (req, res) {
    const id = req.params.funcionarioId;
    Funcionario.findById(id, function (err, funcionario) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar funcionário, ID mal informado"
            });
        } else if (funcionario == null) {
            res.status(400).json({
                message: "Funcionário não encontrado"
            });
        } else {
            res.status(200).json({
                message: "Funcionario encontrado",
                funcionario: funcionario
            });
        }
    });

});

//PUT
router.put("/:funcionarioId", function (req, res) {
    const id = req.params.funcionarioId;
    Funcionario.findById(id, function (err, func) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar, ID mal informado"
            });
        } else if (func == null) {
            res.status(400).json({
                message: "Funcionário não encontrado"
            });
        } else {
            func.nome = req.body.nome;
            func.sobrenome = req.body.sobrenome;
            func.dtNasc = req.body.dtNasc;
            func.sexo = req.body.sexo;
            func.rg = req.body.rg;
            func.cpf = req.body.cpf;
            func.telCelular = req.body.telCelular;
            func.cep = req.body.cep;
            func.logradouro = req.body.logradouro;
            func.bairro = req.body.bairro;
            func.cidade = req.body.cidade;
            func.estado = req.body.estado;
            func.dtAdmissao = req.body.dtAdmissao;
            func.cargo = req.body.cargo;

            func.save(function (error) {
                if (err) {
                    res.send("Erro ao tentar atualizar o funcionário " + error);
                }
                res.status(200).json({
                    message: "Funcionário atualizado com sucesso"
                });
            });
        }
    });

});

router.delete("/:funcionarioId", function (req, res) {
    Funcionario.findByIdAndRemove(req.params.funcionarioId, (err, funcionario) => {
        if (err) {
            return res.status(500).send(err);
        }

        const response = {
            message: "Funcionário removido com sucesso",
            id: funcionario.id
        }
        res.status(200).send(response);
    })
});


module.exports = router;