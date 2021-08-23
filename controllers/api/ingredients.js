const router = require('express').Router();
const { Cupboard, Ingredient } = require('../../models');
const withAuth = require('../../utils/auth.js');
router.post('/',   async (req, res) => {
    try {
      const cupboardData = await Cupboard.findOne({
        where: {
          name: req.body.cupboardItem,
          user_id: req.user.id
        }
      })

      cupboard_id = cupboardData.id;

      const dbResponse = await Ingredient.create({
        cupboard_id,
        meal_id: req.body.meal_id,
        quantity: req.body.quantity,
      })
      
      return res.json(dbResponse)
   
    } catch (err) {
      console.log(err)
     
      res.status(500).json(err);
    }
  });
  
  //Update Ingredient item - may only need to update quantity
  router.put('/:id',   async (req, res) => {
    try {
      const updateIngredient = await Ingredient.update(
        {
          ...req.body
        },
        {where: {
          id: req.params.id}
    });
      
      return res.json(updateIngredient)
   
      // });
    } catch (err) {
      console.log(err)
     
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id',   async (req, res) => {
    try {
      const oneIngredient = await Ingredient.destroy(
        {where: {
          id: req.params.id}
    });
      
      return res.json(oneIngredient)
   
      // });
    } catch (err) {
      console.log(err)
     
      res.status(500).json(err);
    }
  });

  router.get('/',   async (req, res) => {
    try {
      const allIngredient = await Ingredient.findAll();
      
      return res.json(allIngredient)
   
      // });
    } catch (err) {
      console.log(err)
     
      res.status(500).json(err);
    }
  });


  module.exports=router;