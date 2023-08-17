const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://ollyhite:leehite@cluster0.npzhb9j.mongodb.net/?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
