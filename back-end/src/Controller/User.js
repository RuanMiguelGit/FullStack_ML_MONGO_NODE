const UserService = require('../Service/User');

const createUser =  async (req, res) => {
    const {name, email, password} = req.body;
    const { message, data, code} = await UserService.createUser(name, email, password);
    if(message) return res.status(code).json({message:message});
    if(data) return res.status(201).json({message:'usuario criado com sucesso'});
  };

  const getAllusers = async(req, res) => {
    const data = await UserService.getAllusers()
    return res.status(200).json(data)
  }

  module.exports={
      createUser,
      getAllusers
  }