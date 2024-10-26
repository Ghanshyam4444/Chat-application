const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Ghanshyam:mangla@cluster0.tn1pu.mongodb.net/chatapp?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`mongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
