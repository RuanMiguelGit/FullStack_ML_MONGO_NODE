const UserModel = require('../Database/Model/User');
const jwt = require('jsonwebtoken');
const secret = 'buyerClub';

const validateUser  = async (email, password) => {
  if( !email || !password) return {
    message:'Todos os campos devem ser preenchidos'
  };
  const user = await UserModel.clients(email, password);


  if(!user || user.email !== email ||user.password !== password) return {
    message:'Nome de usuario ou senha incorretos'
  };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const {_id, role, name} = user;


  const token = jwt.sign({ data: _id, email, role }, secret, jwtConfig);
  return { token , role, name};
    
};

module.exports = {
  validateUser
};