const mongoose = require('mongoose');

const uri = "mongodb+srv://toharshitchand_db_user:0SoP6m23nxjXWYIY@harshit-271107.mc9rzky.mongodb.net/urlShortener?retryWrites=true&w=majority";

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log(" MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
