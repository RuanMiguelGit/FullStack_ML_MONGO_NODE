require('dotenv').config();
const { MongoClient } = require('mongodb');
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb+srv://ruanmiguel:5665123456@cluster0.2e792.mongodb.net/BestBuyers?retryWrites=true&w=majority'
const DB_NAME = process.env.DB_NAME

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      });
};

module.exports = connection;