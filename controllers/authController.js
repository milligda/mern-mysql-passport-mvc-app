// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

// ==============================================================================
// AuthController Methods
// ==============================================================================

module.exports = {
  signup: (req, res) => {
    console.log("signed up", req.user);
    const userInfo = {
      username: req.user.username,
      id: req.user.id
    };
    res.send(userInfo);
  },
  login: (req, res) => {
    console.log("logged in", req.user);
    const userInfo = {
      username: req.user.username,
      id: req.user.id
    };
    res.send(userInfo);
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy(err => {
        res.json({ message: "user has been logged out" });
      });
    } else {
      res.send({ message: "no user to logout" });
    }
  }
};
