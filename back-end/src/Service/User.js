const UserModel = require('../Database/Model/User');
const UserSchema = require('../Schemas/UserValidator');
const LoginSchema = require('../Schemas/LoginValidator')

const createUser = async  (name, email, password) => {
    const validate =  UserSchema.validate(name, email, password);
    if(validate.message) return validate;
    const validateEmail = await UserSchema.validateEmail(email);
    if(validateEmail.message) return validateEmail;
    const data = await UserModel.createUser(name, email, password);
    return { data }; 
  };

  const getAllusers = async () => {
    const users = await UserModel.getAllusers()
    return users
  }

  const login =  async (email, password) => {
    const {message, token, role, name} = await LoginSchema.validateUser(email, password);
    if(message) return {message};
     
    return {token, role, name};
  };
  
  module.exports = {
    createUser,
    getAllusers,
    login
}