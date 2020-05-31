const Endereco = require('../app/models/endereco');
const mongoose = require('mongoose');

exports.get = async () => {
    const res = await Endereco.find();
    return res;
}

exports.getById = async (id) => {
    const res = await Endereco.findById(id);
    return res;
}

exports.post = async(data) =>{
    const cargo = new Endereco(data);
    await cargo.save();
}

exports.put = async(id, data) =>{
    await Endereco.findByIdAndUpdate(id, {
        $set:{
            logradouro: data.logradouro,
            numero: data.numero,
            cidade: data.cidade,
            estado: data.estado,
            cep: data.cep
        }
    });
}

exports.delete = async(id) =>{
    await Endereco.findByIdAndDelete(id);
}