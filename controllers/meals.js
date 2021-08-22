const router = require('express').Router();
const { Meals } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const CompleteMeal = await Meals.findAll();
        console.log(CompleteMeal);
        let meals = CompleteMeal.map(c => c.get({ plain: true }));

        
        res.render('meals', {meals});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;