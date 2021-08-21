const router = require('express').Router();
const cupboard = require('./cupboard');
const meals = require('./mealsRoute')
const ingredients = require('./ingredients');
const userRoutes = require('./userRoutes');
const plan = require('./mealplanRoute');


router.use('/ingredients', ingredients);
router.use('/cupboards', cupboard);
router.use('/users', userRoutes);
router.use('/meals', meals);
router.use('/plan',plan);

module.exports = router;