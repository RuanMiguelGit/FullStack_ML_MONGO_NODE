const TrackerService = require('../Service/Tracker');


const registerUsage =  async (req, res) => {
    const { name, email, searchItem } = req.body;
    const { message, data, code } = await TrackerService.registerUsage(name, email, searchItem);
    if(message) return res.status(code).json({message:message});
    if(data) return res.status(201).json({message:'Dado guardado'});
  };

  
  module.exports = {
    registerUsage
  }