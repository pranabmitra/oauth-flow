const express = require('express');
require('./services/passport'); // no need to return from passport file
const app = express();


require('./routes/authRoutes')(app); // return function and imediately invoke/call the function


const PORT = process.env.PORT || 5000;

app.listen(PORT);


