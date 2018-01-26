const passport = require('passport');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hi there!');
    });

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.send(req.user);
        // res.redirect('/');
    });
};
