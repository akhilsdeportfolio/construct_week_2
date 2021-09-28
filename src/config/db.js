const mongoose = require("mongoose");

const env = require("dotenv").config();

let connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ci44m.mongodb.net/nordman?retryWrites=true&w=majority`
  );
};

module.exports = connect;
