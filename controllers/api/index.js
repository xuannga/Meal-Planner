const router = require('express').Router();
const cupboard = require('./cupboard');
const meals = require('./meal')

router.use('/cupboard', userRoutes);


module.exports = router;