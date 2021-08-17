const router = require('express').Router();
const cupboard = require('./cupboard');
const meals = require('./mealsRoute')
const ingredients = require('./ingredients');
const userRoutes = require('./userRoutes');

router.use('/ingredients', ingredients);
router.use('/cupboard', cupboard);
router.use('/users', userRoutes);
router.use('/meals', meals);

module.exports = router;