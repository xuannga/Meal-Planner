const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const cupboard = require('./cupboard');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/cupboard', cupboard);

module.exports = router;