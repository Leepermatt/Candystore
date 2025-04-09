'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

// Initiate Google OAuth for Web App
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback for Web App
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Redirect to the main page or dashboard
    res.redirect('/');  // Adjust to your desired route after successful login
  }
);

module.exports = router;
