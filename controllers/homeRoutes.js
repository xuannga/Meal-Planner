const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Meals } = require('../models')

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard');
});

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/planning', withAuth, (req, res) => {
    res.render('planningMeals')
});


router.get('/mealplan', withAuth, async (req, res) => {
    try {
        
        const mealData = await Meals.findAll();

        meals = mealData.map( (meal) => meal.get({ plain: true}) )

        res.render('plannedMealView', { meals })

    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router;