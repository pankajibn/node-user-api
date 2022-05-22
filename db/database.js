const mongoose = require("mongoose");
const connection = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);
  if (conn) console.log(`Mongodb connected`);
};

module.exports = connection;
