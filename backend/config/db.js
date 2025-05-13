const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sumitkr9199:JssEWd3nHUX20uTu@cluster0.pkabura.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to MongoDB!"));

module.exports = db;