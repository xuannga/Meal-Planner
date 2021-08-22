const router = require('express').Router();
const { Cupboard } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const Refrigitems = await Cupboard.findAll(
            { where: { isRefrig: true } }
        );

        const Dryitems = await Cupboard.findAll(
            { where: { isRefrig: false } }
        );

        let Refrigs = Refrigitems.map(c => c.get({ plain: true }));
        let Drys = Dryitems.map(c => c.get({ plain: true }));
        
        res.render('cupboard', {
            Refrigs,
            Drys

            /* logininfo here */
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;