const connection = require('./connections');
const { ObjectId, MongoError, connect, } = require('mongodb');

const registerUsage = async (name, email, searchItem,) => {
    const data  = await connection()
      .then((db) =>  
        db.collection('userTracker').insertOne({name, email, searchItem}))
      .then((result) => result );
    return data;
  };

  const uniqueTrackedValue = async (email, searchItem) => {
    const info = await connection()
      .then((db) => db.collection('userTracker').findOne({ email: email, searchItem: searchItem   }))
      .then((result)=> result);
    return info;   
  };

  const getAllTrackedInfo = async () => {
    const data = await connection()
    .then((db) => db.collection('userTracker').find({}).toArray())
    .then((res) => res)
    return data
  }

module.exports = {
    registerUsage,
    uniqueTrackedValue,
    getAllTrackedInfo
}