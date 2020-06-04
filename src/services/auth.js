const jwt = require('jsonwebtoken')
require('dotenv/config')

exports.authorize = (req, res, next) => {
  const token = req.headers['authorization']

  if (!token)
    res.status(401).json({auth: false, message: 'Acesso restrito'})
  else {
    jwt.verify(token, process.env.SECRET, (error) => {
      if (error)
        res.status(401).json({auth: false, message: 'Token inválido'})
      else next()
    })
  }
}