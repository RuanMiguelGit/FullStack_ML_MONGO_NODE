const UserService = require('../Service/User');

const createUser =  async (req, res) => {
    const {name, email, password} = req.body;
    const { message, data, code} = await UserService.createUser(name, email, password);
    if(message) return res.status(code).json({message:message});
    if(data) return res.status(200).json({message:'usuario criado com sucesso'});
  };

  module.exports={
      createUser
  }