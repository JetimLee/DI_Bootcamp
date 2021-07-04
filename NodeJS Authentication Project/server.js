/////// app.js

const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  })
);

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/signup", (req, resp) => {
  console.log(`going to signup`);
  resp.render("sign-up-form");
});

app.post("/signup", async (req, resp) => {
  const { password, username } = req.body;
  const user = new User({
    username,
    password,
  });

  try {
    await user.save();
  } catch (error) {
    `could not create a user!`;
    resp.redirect("/");
  }

  resp.status(201).json({ user, password });
});

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

app.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
});
app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});
const PORT = process.env.PORT || 4000;

const URL =
  "mongodb+srv://gavin:gavin123@cluster0.fe4dx.mongodb.net/the-odin-project-learning?retryWrites=true&w=majority";

mongoose
  .connect(URL, { useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
