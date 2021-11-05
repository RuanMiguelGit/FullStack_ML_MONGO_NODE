const UserModel = require('../Database/Model/User');
const UserSchema = require('../Schemas/UserValidator');

const createUser = async  (name, email, password) => {
    const validate =  UserSchema.validate(name, email, password);
    if(validate.message) return validate;
    const validateEmail = await UserSchema.validateEmail(email);
    if(validateEmail.message) return validateEmail;
    const data = await UserModel.createUser(name, email, password);
    return { data }; 
  };

  module.exports = {
    createUser
}