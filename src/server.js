const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// Importando rotas da aplicação
const funcionarioRoutes = require("./routes/funcionario-routes");
const cargoRoutes = require('./routes/cargo-routes');
const cargoFuncionariosRoutes = require('./routes/cargo-funcionario-routes');
const avaliacaoRoutes = require("./routes/avaliacao-routes");

// PERSISTÊNCIA
mongoose.connect('mongodb+srv://marcos:bolseiro@cluster0-qtxkw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

// Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta via arquivo de configuração
var port = process.env.port || 3000;

// Rotas da aplicação
app.use('/api/funcionarios', funcionarioRoutes);
app.use('/api/cargos', cargoRoutes);
app.use('/api/cargos-funcionarios', cargoFuncionariosRoutes);
app.use('/api/avaliacao', avaliacaoRoutes)

app.listen(port, () => {
    console.log('Server up and running!');
});