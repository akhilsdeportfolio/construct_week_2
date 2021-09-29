const express = require("express");

const router = express.Router();
const User = require("../models/user.model");

// GET ALL USERS
router.get("/all", async (req, res) => {
  let users = await User.find().lean().exec();
  res.send({ users });
});

//CREATE USER POST

router.post("/createUser", async (req, res) => {
  let createdUser = await User.create(req.body);

  res.send({ createdUser });
});

router.patch("/updateUser/:id", async (req, res) => {
  let updateUserData = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.send({ updateUserData });
});

router.delete("/delete/:id", async (req, res) => {
  let deleteUserData = await User.findByIdAndDelete(req.params.id);

  res.send({ deleteUserData });
});
module.exports = router;
