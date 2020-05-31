const Funcionario = require('../app/models/funcionario');
const mongoose = require('mongoose');

exports.get = async () => {
    const res = await Funcionario.find();
    return res;
}

exports.getById = async (id) => {
    const res = await Funcionario.findById(id);
    return res;
}

exports.post = async(data) =>{
    const avaliacao = new Funcionario(data);
    await avaliacao.save();
}

exports.put = async(id, data) =>{
    await Funcionario.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            sobrenome: data.sobrenome,
            dtNasc: data.dtNasc,
            sexo: data.sexo,
            rg: data.rg,
            cpf: data.cpf,
            telCelular: data.telCelular,
            dtAdmissao: data.dtAdmissao,
            endereco: data.endereco,
            cargo: data.cargo
        }
    });
}

exports.delete = async(id) =>{
    await Funcionario.findByIdAndDelete(id);
}