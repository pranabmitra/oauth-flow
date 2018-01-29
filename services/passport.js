const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.serializeUser(function(user, done) {
    done(null, user.id); // it should be user's table ID from DB
});

passport.deserializeUser(function(id, done) {
    // console.log('deserialize ', id);
    const user = {
       id // id: id
    };

    done(null, user); // Retrieve the User by ID from DB
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // console.log('access toekn:', accessToken);
    // console.log('refresh toekn:', refreshToken);
    // console.log('profile', profile);

    const user = {
        id: profile.id // google ID
    };

    done(null, user);
}));
