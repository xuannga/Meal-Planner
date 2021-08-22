const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Meals, MealPlan } = require('../models')

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

        meals = mealData.map( (meal) => meal.get({ plain: true}) );

        const planningData = await MealPlan.findAll({
            include: [{ model: Meals }]
        });

        plans = planningData.map( (plan) => plan.get({ plain: true}))

        let Monday = []

        for (let i = 0; i < 3; i++) {

            Monday.push( plans.shift() )

        }

        let Tuesday = []

        for (let i = 0; i < 3; i++) {

            Tuesday.push( plans.shift() )

        }

        let Wednesday = []

        for (let i = 0; i < 3; i++) {

            Wednesday.push( plans.shift() )

        }

        let Thursday = []

        for (let i = 0; i < 3; i++) {

            Thursday.push( plans.shift() )

        }

        let Friday = []

        for (let i = 0; i < 3; i++) {

            Friday.push( plans.shift() )

        }

        let Saturday = []

        for (let i = 0; i < 3; i++) {

            Saturday.push( plans.shift() )

        }

        let Sunday = []

        for (let i = 0; i < 3; i++) {

            Sunday.push( plans.shift() )

        }

        res.render('plannedMealView', { meals, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday})

    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router;