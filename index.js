const express = require('express');
const passport = require('passport');
require('./services/passport'); // no need to return from passport file
const keys = require('./config/keys');
const cookieSession = require('cookie-session');

const profileRoutes = require('./routes/profileRoutes');


const app = express();

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieSessionKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // return function and imediately invoke/call the functioni
app.use('/profile/', profileRoutes); // another way to define route


const PORT = process.env.PORT || 5000;

app.listen(PORT);


