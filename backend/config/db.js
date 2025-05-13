const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sumitkr9199:JssEWd3nHUX20uTu@cluster0.pkabura.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.catch((err)=> console.error("Connection error:",err));
