const router = require('express').Router();
const cupboard = require('./cupboard');
const ingredients = require('./ingredients');


router.use('/cupboard', userRoutes);
router.use('/ingredients', ingredients);


module.exports = router;