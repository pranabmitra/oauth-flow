const express = require('express');
const passport = require('passport');
require('./services/passport'); // no need to return from passport file
const app = express();

app.use(passport.initialize());
require('./routes/authRoutes')(app); // return function and imediately invoke/call the function


const PORT = process.env.PORT || 5000;

app.listen(PORT);


