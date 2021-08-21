const router = require('express').Router();
const passport = require('../config/passport')

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
}))

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

module.exports = router;