const express = require('express');
const router = express.Router();
//get express validator:
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

//@route    POST api/users
//@desc     Register a user
//@access   public
router.post(
  '/',
  [
    //check name is set:
    check('name', 'Please add Name.')
      .not()
      .isEmpty(),
    // username must be an email
    check('email', 'Please include a valid email.').isEmail(),
    // password must be at least 5 chars long
    check(
      'password',
      'Please enter a password with 6 or more characters.'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');
  }
);

module.exports = router;
