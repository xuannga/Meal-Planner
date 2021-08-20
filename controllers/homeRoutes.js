const router = require('express').Router();
const pa

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',

    failureRedirect: '/signup'
}))

module.exports = router;