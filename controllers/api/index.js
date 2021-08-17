const router = require('express').Router();

const cupboard = require('./cupboard');
const userRoutes = require('./userRoutes');

router.use('/cupboard', cupboard);
router.use('/users', userRoutes);

module.exports = router;