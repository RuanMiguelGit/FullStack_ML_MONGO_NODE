const TrackerModel = require('../Database/Model/Tracker');

const validateTrack = async (email, searchItem) => {
  const validate = await  TrackerModel.uniqueTrackedValue(email, searchItem);
  if (validate !==null ) return {
    message:'Dado já registrado',
    code:409

  };
    

  return {};
};



  module.exports = {
    validateTrack
  }