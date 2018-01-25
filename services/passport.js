const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // console.log('access toekn:', accessToken);
    // console.log('refresh toekn:', refreshToken);
    // console.log('profile', profile);

    done(profile.id); // user's google ID
}));
