var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini-Message Board", messages });
});
router.get("/new", (req, resp) => {
  resp.render("form", { title: "Enter a message" });
});
router.post("/new", (req, resp) => {
  const { user, text } = req.body;
  // console.log(name, message);
  messages.push({ user, text, added: new Date() });
  console.log(messages);
  resp.redirect("/");
});
module.exports = router;
