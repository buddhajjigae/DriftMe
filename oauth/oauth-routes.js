const express = require('express');

const router = express.Router();
const passport = require('passport');

router.get('/login', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/youtube', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/youtube.readonly'],
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('https://accounts.google.com/logout');
});


module.exports = router;
