const router = require('express').Router();

const apiRoutes = require('./api');
const cupboardRoutes = require('./cupboard');

router.use('/api', apiRoutes);
router.use('/cupboard', cupboardRoutes);

module.exports = router;