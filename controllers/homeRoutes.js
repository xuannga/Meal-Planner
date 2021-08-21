const router = require('express').Router();
const withAuth = require('../utils/auth')

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard');
})

module.exports = router;