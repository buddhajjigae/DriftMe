const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const YoutubeStrategy = require('passport-youtube-v3').Strategy;
const keys = require('./oauth-info.js');
const User = require('../server/database/models/user-model.js');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user.id);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: 'http://localhost:8080/auth/google/redirect',
      scope: ['https://www.googleapis.com/auth/youtube.readonly'],
    },
    ((accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({ youtubeId: profile.id })
        .then((currUser) => {
          if (currUser) {
            console.log(`USER EXISTS: ${currUser}`);
            done(null, currUser);
          } else {
            new User({
              username: profile.displayName,
              youtubeId: profile.id,
            })
              .save()
              .then((newUser) => {
                console.log(`new user made: ${newUser}`);
                done(null, newUser);
              });
          }
        });
    }),
  ),
);
