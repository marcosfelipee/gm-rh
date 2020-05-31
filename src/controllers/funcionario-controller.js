const Funcionario = require("../app/models/funcionario");
const repository = require("../repositories/funcionario-repository");

exports.post = async (req, res) => {

    try {
        await repository.post({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            dtNasc: req.body.dtNasc,
            sexo: req.body.sexo,
            rg: req.body.rg,
            cpf: req.body.cpf,
            telCelular: req.body.telCelular,
            dtAdmissao: req.body.dtAdmissao,
            endereco: req.body.endereco,
            cargo: req.body.cargo
        });
        res.status(201).send({
            message: "Funcionário cadastrado com sucesso"
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha ao inserir um funcionário",
            erro: error
        });

    }

};

exports.getAll = async (req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        })
    }
};

exports.getById = async (req, res) => {
    try {
        const id = req.params.funcionarioId;
        var data = await repository.getById(id);
        res.status(200).send(data);
    } catch (error) {
        if (data == null) {
            res.status(400).json({
                message: "Funcionário não encontrado! Verifique se o ID é válido!"
            });
        } else {
            res.status(500).send({
                message: "Falha na requisição",
                erro: error
            });
        }
    }

}

exports.put = async (req, res) => {
    try {
        const id = req.params.funcionarioId;
        const data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Funcionário atualizado com sucesso",
            dados: data
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}



//DELETE - controller
exports.delete = async (req, res) => {
    try {
        const id = req.params.funcionarioId;
        await repository.delete(id);
        res.status(200).send({
            message: "Funcionário removido com sucesso",
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }

};