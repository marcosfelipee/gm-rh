const Avaliacao = require('../app/models/avaliacao');
const mongoose = require('mongoose');

exports.get = async () => {
    const res = await Avaliacao.find();
    return res;
}

exports.getById = async (id) => {
    const res = await Avaliacao.findById(id);
    return res;
}

exports.post = async(data) =>{
    const avaliacao = new Avaliacao(data);
    await avaliacao.save();
}

exports.put = async(id, data) =>{
    await Avaliacao.findByIdAndUpdate(id, {
        $set:{
            descricao: data.descricao,
            nota: data.nota,
        }
    });
}

exports.delete = async(id) =>{
    await Avaliacao.findOneAndRemove(id);
}