const TrackerModel = require('../Database/Model/Tracker');
const TrackerSchema = require('../Schemas/TrackerValidador')

const registerUsage = async  (name, email, searchItem) => {
    const validateTracker = await TrackerSchema.validateTrack(email, searchItem)
    if(validateTracker.message) return validateTracker
    const data = await TrackerModel.registerUsage(name, email, searchItem);
    return { data }; 
  };

  const getAllTrackedInfo = async () => {
    const info = await TrackerModel.getAllTrackedInfo()
    return info
  }
  
module.exports = {
    registerUsage,
    getAllTrackedInfo
}