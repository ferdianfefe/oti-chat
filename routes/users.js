const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");

/* Load User model */
const User = require("../model/User");

/* Load secret key from keys.js */
const { secret } = require("../config/keys");

/* Register route */
router.post("/signup", (req, res) => {
  let { name, email, username, password, confirmPassword } = req.body;
  /* Check if password inputs do not match */
  if (password != confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Password does not match",
    });
  }

  /* Check if email is available */
  User.findOne({ email }).then((user) => {
    /* If user with the specified email is found */
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered",
      });
    }

    /* Check if username is available */
    User.findOne({ username }).then((user) => {
      /* If user with the specified username is found */
      if (user) {
        return res.status(400).json({
          success: false,
          message: "Username is not available",
        });
      }

      /* Encrypt user password and save new user data */
      bcrypt.genSalt(10).then((salt) => {
        bcrypt.hash(password, salt).then((hash) => {
          let newUser = new User({
            email,
            name,
            username,
            password: hash,
          });

          newUser.save().then((savedUser) => {
            return res.status(201).json({
              success: true,
              message: "User registered successfully",
            });
          });
        });
      });
    });
  });
});

/* Login route */
router.post("/signin", (req, res) => {
  let { username, password } = req.body;

  /* Check if username found */
  User.findOne({ username }).then((user) => {
    /* If user is not found */
    if (!user) {
      res.status(404).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    /* Compare password */
    bcrypt.compare(password, user.password).then((matches) => {
      if (matches) {
        /* If password is valid then generate JWT payload and send it to client */
        let payload = {
          _id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
        };
        jwt.sign(payload, secret, { expiresIn: 604800 }, (err, token) => {
          return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
            token: `Bearer ${token}`,
          });
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Invalid username or password",
        });
      }
    });
  });
});

router.get("/profile", verifyToken, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, result) => {
    if (err) throw err;
    return res.status(200).json({
      success: true,
      user: result,
    });
  });
});

// Get all contacts
router.get("/contacts", verifyToken, (req, res) => {
  User.find().then((users) => {
    const userList = users.filter((user) => user._id != req.user._id);
    res.status(200).json({
      success: true,
      value: userList,
    });
  });
});

/* Edit profile */
router.put("/profile", verifyToken, (req, res) => {
  const { name, bio } = req.body;
  User.updateOne({ _id: req.user._id }, { name, bio }, (err, result) => {
    if (err) throw err;
    return res.status(200).json({
      success: true,
      data: result,
    });
  });
});

module.exports = router;
