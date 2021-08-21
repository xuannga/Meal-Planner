const router = require('express').Router();
const withAuth = require('../utils/auth')

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard');
})

router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/planning', withAuth, (req, res) => {
    res.render('planningMeals')
})

module.exports = router;