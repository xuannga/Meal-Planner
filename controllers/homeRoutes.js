const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Meals, MealPlan, Cupboard, Ingredient } = require('../models')

router.get('/login', (req, res) => {
    res.render('login', {logged_in: req.isAuthenticated()} );
});

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard', {logged_in: req.isAuthenticated()} );
});

router.get('/', (req, res) => {
    res.render('homepage', {logged_in: req.isAuthenticated()} )
});

router.get('/planning', withAuth, (req, res) => {
    res.render('planningMeals', {logged_in: req.isAuthenticated()} )
});


router.get('/mealplan', withAuth, async (req, res) => {
    try {
        
        const mealData = await Meals.findAll({
            where: {user_id: req.user.id}
        });

        meals = mealData.map( (meal) => meal.get({ plain: true}) );

        const mondayData = await MealPlan.findAll({
            include: [{ model: Meals }],
            where: {
                user_id: req.user.id,
                day: "Monday",
            }
        });

        const mondayDataClean = mondayData.map( (plan) => plan.get({ plain: true}))

        let Monday = {};

        for (let index = 0; index < mondayDataClean.length; index++) {

            const plan = mondayDataClean[index];
            Monday[plan.time] = plan
            
        }

        const tuesdayData = await MealPlan.findAll({
            include: [{ model: Meals }],
            where: {
                user_id: req.user.id,
                day: "Tuesday",
            }
        });

        const tuesdayDataClean = tuesdayData.map( (plan) => plan.get({ plain: true}))

        let Tuesday = {};

        for (let index = 0; index < tuesdayDataClean.length; index++) {

            const plan = tuesdayDataClean[index];
            Tuesday[plan.time] = plan
            
        }

        const wednesdayData = await MealPlan.findAll({
            include: [{ model: Meals }],
            where: {
                user_id: req.user.id,
                day: "Wednesday",
            }
        });

        const wednesdayDataClean = wednesdayData.map( (plan) => plan.get({ plain: true}))

        let Wednesday = {};

        for (let index = 0; index < wednesdayDataClean.length; index++) {

            const plan = wednesdayDataClean[index];
            Wednesday[plan.time] = plan
            
        }

        // ========================================================
        const thursdayData = await MealPlan.findAll({
            include: [{ model: Meals }],
            where: {
                user_id: req.user.id,
                day: "Thursday",
            }
        });

        const thursdayDataClean = thursdayData.map( (plan) => plan.get({ plain: true}))

        let Thursday = {};

        for (let index = 0; index < thursdayDataClean.length; index++) {

            const plan = thursdayDataClean[index];
            Thursday[plan.time] = plan
            
        }
        // ========================================================
        const fridayData = await MealPlan.findAll({
            include: [{ model: Meals }],
            where: {
                user_id: req.user.id,
                day: "Friday",
            }
        });

        const fridayDataClean = fridayData.map( (plan) => plan.get({ plain: true}))

        let Friday = {};

        for (let index = 0; index < fridayDataClean.length; index++) {

            const plan = fridayDataClean[index];
            Friday[plan.time] = plan
            
        }
        // ==============================================================
        const saturdayData = await MealPlan.findAll({
            include: [{ model: Meals }],
            where: {
                user_id: req.user.id,
                day: "Saturday",
            }
        });

        const saturdayDataClean = saturdayData.map( (plan) => plan.get({ plain: true}))

        let Saturday = {};

        for (let index = 0; index < saturdayDataClean.length; index++) {

            const plan = saturdayDataClean[index];
            Saturday[plan.time] = plan
            
        }
        // ================================================================
        const sundayData = await MealPlan.findAll({
            include: [{ model: Meals }],
            where: {
                user_id: req.user.id,
                day: "Sunday",
            }
        });

        const sundayDataClean = sundayData.map( (plan) => plan.get({ plain: true}))

        let Sunday = {};

        for (let index = 0; index < sundayDataClean.length; index++) {

            const plan = sundayDataClean[index];
            Sunday[plan.time] = plan
            
        }

        res.render('plannedMealView', { meals, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, logged_in: req.isAuthenticated()})

    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

router.get('/meals/:id', withAuth, async (req, res) => {

    try {
    
        const mealData = await Meals.findByPk(req.params.id, {
            include: {model:Cupboard}
        });

        const meal = mealData.get( { plain: true} );

        const cupboardData = await Cupboard.findAll({
            where: {
                user_id: req.user.id
            }
        })

        const cupboard = cupboardData.map(item => item.get({ plain: true }))

        // const ingredientData = await Meals.findByPk(req.params.id, {
        //     include: {model: Cupboard}
        // });

        // const ingredients = ingredientData.get( { plain: true} );

        console.log(meal.Cupboards)

        res.render('singleMealView', {...meal, cupboard, logged_in: req.isAuthenticated() } )

    } catch (err) {
        console.error(err)
        req.status(500).json(err)
    }

})

module.exports = router;