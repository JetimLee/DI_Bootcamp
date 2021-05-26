if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const server = express();
const bcrpyt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const initalizePassport = require("./passport-config");
initalizePassport(passport, (email) => {
  users.find((user) => user.email === email),
    (id) => users.find((user) => user.id === id);
});

server.set("view-engine", "ejs");
server.use(express.urlencoded({ extended: false }));

server.use(flash());
server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
server.use(passport.initialize());
server.use(passport.session());

const users = [];

server.get("/", (req, resp) => {
  resp.render("index.ejs", { name: req.user.name });
});
server.get("/login", (req, resp) => {
  resp.render("login.ejs", { name: "gavin" });
});
server.get("/register", (req, resp) => {
  resp.render("register.ejs", { name: "gavin" });
});
server.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

server.post("/register", async (req, resp) => {
  try {
    const hashedPassword = await bcrpyt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    resp.redirect("/login");
  } catch {
    resp.redirect("/register");
  }
  console.log(users);
});
server.listen(5010, () => {
  console.log("listening on port 5010");
});
