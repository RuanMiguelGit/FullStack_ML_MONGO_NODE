const connection = require('./connections');
const { ObjectId, MongoError, connect, } = require('mongodb');

const createUser = async (name, email, password,) => {
  const data  = await connection()
    .then((db) =>  
      db.collection('users').insertOne({name, email, password, role:'user',}))
    .then((result) => result );
  return data;
};

const uniqueValue = async (email) => {
    const info = await connection()
      .then((db) => db.collection('users').findOne({ email: email }))
      .then((result)=> result);
    return info;   
  };
  

module.exports = {
    createUser,
    uniqueValue
}