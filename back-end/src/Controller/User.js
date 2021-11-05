const UserService = require('../Service/User');

const createUser =  async (req, res) => {
    const {name, email, password} = req.body;
    const { message, data, code} = await UserService.createUser(name, email, password);
    if(message) return res.status(code).json({message:message});
    if(data) return res.status(created).json({user:{
      
      name: data.name,
      email: data.email,
      role: data.role,
      _id: data._id,
        
    }});
  };

  module.exports={
      createUser
  }