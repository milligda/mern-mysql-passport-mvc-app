// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;

// ==============================================================================
// PassPort Signup Strategy
// ==============================================================================

module.exports = (passport, user) => {
  const User = user;

  const createHash = password => {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };

  passport.use(
    "signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        User.findOne({
          where: {
            username: username
          }
        })
          .then(user => {
            if (user) {
              console.log("User already exists");
              return done(null, false, {
                message: "That username is already taken"
              });
            } else {
              const hashPassword = createHash(password);

              const data = {
                username: username,
                password: hashPassword
              };

              User.create(data)
                .then((newUser, created) => {
                  return done(null, newUser);
                })
                .catch(err => {
                  console.log("Error creating new user: " + err);
                  return done(null, false, {
                    message: "something went wrong with your signup"
                  });
                });
            }
          })
          .catch(err => {
            console.log("Error in Signup: " + err);
            return done(null, false, {
              message: "something went wrong with your signup"
            });
          });
      }
    )
  );
};
