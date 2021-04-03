const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');

const authRoutes = require('../oauth/oauth-routes.js');
// eslint-disable-next-line no-unused-vars
const passportSetup = require('../oauth/oauth.js');
const User = require('./database/database-info');
const cookie = require('./cookies/cookie-info');

const app = express();
const PORT = 3006;


/* Connect to MongoDB */
mongoose.connect(`mongodb+srv://${User.username}:${User.password}@cluster0.5agot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

/* Serve static */
app.use(express.static(path.resolve(__dirname, '../client'))); // serves the index.html

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [cookie.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());


/* OAuth route --> authRoutes */
app.use('/auth', authRoutes);

/* Start server on port: PORT */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
