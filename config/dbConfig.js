const mongoose = require("mongoose");
mongoose.connect(process.env.mongoURI);
const connection = mongoose.connection;
connection.on("error", () => {
  console.log("Database connection failed");
});
connection.on("connected", () => {
  console.log("Database connected successfully");
});
module.exports = connection;
