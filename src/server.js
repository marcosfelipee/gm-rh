const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// Importando rotas da aplicação
const funcionarioRoutes = require('./routes/funcionario-routes')
const cargoRoutes = require('./routes/cargo-routes')
const cargoFuncionariosRoutes = require('./routes/cargo-funcionario-routes')
const authRoutes = require('./routes/auth-routes')
const userRoutes = require('./routes/user-routes')
const avaliacaoRoutes = require('./routes/avaliacao-routes')
const enderecoRoutes = require('./routes/endereco-routes')

const authService = require('./services/auth')

const {DB_USER, DB_PASSWORD} = process.env
// PERSISTÊNCIA
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}` +
    '@cluster0-qtxkw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

// Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

//Definindo a porta via arquivo de configuração
var port = process.env.port || 8000

// Rotas da aplicação
app.use('/api/auth', authRoutes)
app.use('/api/funcionario',authService.authorize, funcionarioRoutes)
app.use('/api/cargos',authService.authorize, cargoRoutes)
app.use('/api/cargos-funcionarios', authService.authorize, cargoFuncionariosRoutes)
app.use('/api/users', authService.authorize, userRoutes)
app.use('/api/avaliacao', authService.authorize, avaliacaoRoutes)
app.use('/api/endereco', authService.authorize, enderecoRoutes)

app.listen(port, () => {
  console.log('Server up and running!')
})