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

router.get('/meals', (req, res) => {
    try {
        
        // get meals from database

        // serialize the data
        
        // pass the data into render res.render('meals', data)
        res.render('meals')

    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router;