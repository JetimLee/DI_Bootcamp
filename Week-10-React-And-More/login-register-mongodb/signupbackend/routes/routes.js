const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/signUpModels.js");
//this is a sign up application, so all we expect here is a post request
router.post("/signup", (req, resp) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => resp.json(data))
    .catch((error) => resp.json(error));
});

module.exports = router;

//when a user is on the sign up page and enters all of this data, the minute they click send the post request gets made.
//the most request comes to the server and router.post handles it, which means this post function will run
