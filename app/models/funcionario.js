var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    cargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cargo",
      },
});

module.exports = mongoose.model('Funcionário', funcionarioSchema);