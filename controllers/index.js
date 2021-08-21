const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const cupboard = require('./cupboard');
const meals = require('./meals');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/cupboard', cupboard);
router.use('/meals', meals);

module.exports = router;