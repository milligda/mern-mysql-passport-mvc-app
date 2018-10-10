// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;

// ==============================================================================
// PassPort Login Strategy
// ==============================================================================

module.exports = (passport, user) => {
  const User = user;

  const isValidPassword = (user, password) => {
    return bCrypt.compareSync(password, user.password);
  };

  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        User.findOne({
          where: { username: username }
        })
          .then(user => {
            if (!user) {
              console.log(`${username} not found`);
              return done(null, false, {
                message: "username does not exist"
              });
            }

            if (!isValidPassword(user, password)) {
              console.log("Invalid Password");
              return done(null, false, {
                message: "incorrect password"
              });
            }

            const userInfo = user.get();
            return done(null, userInfo);
          })
          .catch(err => {
            console.log("Login Error: ", err);
            return done(null, false, {
              message: "something went wrong with your login"
            });
          });
      }
    )
  );
};
