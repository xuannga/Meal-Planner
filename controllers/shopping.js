const router = require('express').Router();
const { Op } = require('sequelize/types');
const { Cupboard } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const Shoppingitems = await Cupboard.findAll(
            { where: 
                { quantity: {
                    [Op.lte]:0
                 }
            }
        });

        let shopItems = Shoppingitems.map(c => c.get({ plain: true }));
        
        res.render('shopping', {
            shopItems       
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;