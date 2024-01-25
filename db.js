const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// A singleton to ensure we only start the database once
// assign the MongoMemoryServer instance to mongoServer
let mongoServer;
const uri = 'mongodb+srv://Surya:sun@asapcluster.3osvgms.mongodb.net/?retryWrites=true&w=majority'


const startDatabase = async () => {
  // Your code here
  await mongoose.connect(uri)
};

const stopDatabase = async () => {
  // Your code here
  await mongoose.disconnect()
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
