const router = require('express').Router();
const {  MealPlan } = require('../../models');
const withAuth = require('../../utils/auth.js');
    
    router.post('/', async (req, res) => {
      try { 
        const planData = await MealPlan.create({
        ...req.body
      });
    
      return res.json(planData);

    } catch (err) {
      res.status(500).json(err);
    }
    });

    router.put('/:id', async (req, res) => {
      try {
        const planData = await MealPlan.update(
          {
            ...req.body
          },
          {where: {
            id: req.params.id}
      });
        
        return res.json(planData)


      } catch (err) {
        console.log(err)
       
        res.status(500).json(err);
      }
    });
    
router.delete('/:id', async (req, res) => {
  try {
    const planData = await MealPlan.destroy(
      {
        where: {
          id: req.params.id
        }
      });

    return res.json(planData)
  } catch (err) {
    console.log(err)

    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const planData = await MealPlan.findAll(
      {
        where: {
          id: req.params.id
        }
      });

    return res.json(planData)
  } catch (err) {
    console.log(err)

    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const planData = await MealPlan.findAll(
      {
        ...req.body
      },
      {
      });

    return res.json(planData)
  } catch (err) {
    console.log(err)

    res.status(500).json(err);
  }
});
     
module.exports = router;