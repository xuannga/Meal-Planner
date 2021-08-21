const router = require('express').Router();
const passport = require('../config/passport')

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/signup', passport.authenticate('local-signup'), (req, res) => {
    res.status(200).json( {message: 'signup successful'} )
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

module.exports = router;