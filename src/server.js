const express = require("express");
const mongoose = require("mongoose");
const firebaseapp = require("firebase/app"); // firebase core module for firebase project config
const firebaseAuth = require("firebase/auth"); //auth module for authentication related stuff

//this is a firebase config object dont worry about it ;
const firebaseConfig = {
  apiKey: "AIzaSyDc34fFMm_hUBM1u0lPpcbQZ3p4t5EWdQE",
  authDomain: "constructweek2.firebaseapp.com",
  projectId: "constructweek2",
  storageBucket: "constructweek2.appspot.com",
  messagingSenderId: "472880804645",
  appId: "1:472880804645:web:23f50d61a6497d2fa4a0cc",
  measurementId: "G-C4Y67ND84R",
};

const fbApp = firebaseapp.initializeApp(firebaseConfig);

const app = express();
app.use(express.json()); //for parsing json data
app.use(express.urlencoded({ extended: false })); // for parsing body data in post requests

start = () => {
  app.listen(5000, async () => {
    console.log("app is listening on the port 5000");
  });
};

start();
