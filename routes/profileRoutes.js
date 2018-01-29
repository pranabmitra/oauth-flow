const router = require('express').Router();
const requireLogin = require('../middlewares/requireLogin');

router.get('/', requireLogin, (req, res) => {
    res.send('You are logged in, profile id is: ' + req.user.id);
});

module.exports = router;
