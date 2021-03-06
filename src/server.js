const express = require("express");
const mongoose = require("mongoose");
const firebaseapp = require("firebase/app"); // firebase core module for firebase project config
const firebaseAuth = require("firebase/auth"); //auth module for authentication related stuff

const connect = require("./config/db");

const axios = require("axios").default; // use axios to make localhost api calls easy

//add controllers here

const userController = require("./controllers/user.controller");
const wishlistController = require("./controllers/wishlist.controller"); //wishlist controller
const wishlistDetailsController = require("./controllers/wishlistDetails.controller"); // wishlistDetails controller
const addressController = require("./controllers/address.controller");
const productCategoryController = require("./controllers/productCategoryController");
const brandController = require("./controllers/brandController");
const priceController = require("./controllers/priceController");
const productSubCategoryController = require("./controllers/productSubCategoryController");
const productController = require("./controllers/productController");
const shoppingBagController = require("./controllers/shoppingBag.controller");
const shoppingBagDetailsController = require("./controllers/shoppingBagDetails.controller");
const paymentsController = require("./controllers/payments.controller");
const checkoutController = require("./controllers/checkout.controller");
const myAccountController = require("./controllers/myAccount.controller");
const orderNumberController = require("./controllers/orderNumber.controller");
const orderController = require("./controllers/order.controller");

//this is a firebase config object dont worry about it ;

const app = express();
app.use(express.json()); //for parsing json data
app.use(express.urlencoded({ extended: true })); // for parsing body data in post requests

// public
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

//mention routes here

app.use("/users", userController);
app.use("/wishlist", wishlistController);
app.use("/wishlistDetails", wishlistDetailsController);

app.use("/address", addressController);

app.use("/productCategories", productCategoryController);
app.use("/brands", brandController);
app.use("/prices", priceController);
app.use("/productSubCategories", productSubCategoryController);
app.use("/products", productController);

app.use("/shoppingBag", shoppingBagController);
app.use("/shoppingBagDetails", shoppingBagDetailsController);

app.use("/myaccount", myAccountController);

app.use("/payments", paymentsController);
app.use("/checkout", checkoutController);

app.use("/orderNumbers", orderNumberController);
app.use("/orders", orderController);

app.get("/", function (req, res) {
  res.render("landingPage.ejs", {});
});

app.get("/login", function (req, res) {
  res.render("login.veiw.ejs", {});
});

app.listen(process.env.PORT || 5000, async () => {
  await connect();
  console.log("app is listening on the port 5000");
});
