const router = require('express').Router();
const { Meals } = require('../../models');
const withAuth = require('../../utils/auth.js');

    
    router.post('/', async (req, res) => {
      try { 
        console.log('route hit')

        const mealData = await Meals.create({
        name: req.body.name,
        instructions: req.body.instructions,
        user_id: req.user.id
      });
    
      return res.json(mealData);

    } catch (err) {
      res.status(500).json(err);
    }
    });

    router.put('/:id', async (req, res) => {
      try {
        const mealData = await Meals.update(
          {
            ...req.body
          },
          {where: {
            id: req.params.id}
      });
        
        return res.json(mealData)
r2

      } catch (err) {
        console.log(err)
       
        res.status(500).json(err);
      }
    });
    
router.delete('/:id', async (req, res) => {
  try {
    const mealData = await Meals.destroy({
      where: {id: req.params.id}
    })

    return res.json(mealData)
  } catch (err) {
    console.log(err)

    res.status(500).json(err);
  }
});


module.exports = router;