var moongoose = require('mongoose');
var Schema = moongoose.Schema;

var funcionarioSchema = new Schema({
    nome: { type: String, required: true },
    sobrenome: String,
    dtNasc: String,
    sexo: {
        type: String,
        enum: ["Masculino", "Feminino"]
    },
    rg: String,
    cpf: String, 
    telCelular: String,
    cep: String, 
    logradouro: String,
    bairro: String,
    cidade: String,
    estado: String,
    dtAdmissao: String,
    cargo: String
});

module.exports = moongoose.model('Funcionário', funcionarioSchema);