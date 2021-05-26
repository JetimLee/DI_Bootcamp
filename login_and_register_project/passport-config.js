const LocalStrategy = require("passport-local").Strategy;
const bcrpyt = require("bcrypt");

const initalize = async (passport, getUserByEmail, getUserById) => {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "No user with that email found" });
    }
    try {
      if (await bcrpyt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "No user with that password found",
        });
      }
    } catch (error) {
      return done(error);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
};

module.exports = initalize;
