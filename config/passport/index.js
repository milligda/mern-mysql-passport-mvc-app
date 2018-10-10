// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const login = require("./login");
const signup = require("./signup");

// ==============================================================================
// Passport Export
// ==============================================================================

module.exports = (passport, user) => {
  const User = user;

  passport.serializeUser((user, done) => {
    console.log("*** serializeUser called ***");
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log("*** deserializeUser called ***");
    User.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    }); 
  });

  login(passport, user);
  signup(passport, user);
};
