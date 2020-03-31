const { Schema, model } = require("mongoose");

module.exports = model(
  "Cargo",
  new Schema({
    cargo: String,
    setor: String,
    salario: Number,
    descricao: String,
    codigoCBO: String,
    funcionario: {
      type: Schema.Types.ObjectId,
      ref: "Funcionario",
    },
  })
);
