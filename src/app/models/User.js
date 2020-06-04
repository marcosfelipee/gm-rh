const {Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema =  new Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['funcionario', 'admin']
  },
})

UserSchema.methods.generateHash = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8))

UserSchema.methods.validateHash = function(password){
  return bcrypt.compareSync(password, this.password)
}

module.exports = model('User', UserSchema)
