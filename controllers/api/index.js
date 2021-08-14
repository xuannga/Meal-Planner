const router = require('express').Router();
const cupboard = require('./cupboard');

router.use('/cupboard', userRoutes);


module.exports = router;