const router = require('express').Router();
const {  MealPlan, Meals } = require('../../models');
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

        const mealData = await Meals.findOne(
          {
            where: {
              name: req.body.mealName
            }
          }
        )

        const dbResponse = await MealPlan.update(
          {
            meal_id: mealData.id,
          },
          {
            where: {id: req.params.id}
          }
        )

        res.status(200).json(dbResponse)

      } catch (err) {
        console.log(err)
       
        res.status(500).json(err);
      }
    });

router.put('/', async (req, res) => {

  try {

    const mealData = await Meals.findOne(
      {
        where: {
          name: req.body.mealName,
          user_id: req.user.id
        }
      }
    )

    const [mealPlan, created] = await MealPlan.findOrCreate({
      where: {
        user_id: req.user.id,
        day: req.body.day,
        time: req.body.time,
      },
      defaults: {
        ...req.body,
        user_id: req.user.id,
        meal_id: mealData.id
      }
    });

    let dbResponse

    if (created) {
      return res.json(mealPlan);
    } else {
      dbResponse = await MealPlan.update({
        meal_id: mealData.id,
        meal_qty: req.body.meal_qty
      },
      {
        where: {
          user_id: req.user.id,
          day: req.body.day,
          time: req.body.time,
        }
      });
    }

    res.status(200).json(dbResponse)

  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }

})
    
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

    const planningData = await MealPlan.findAll({
      include: [{ model: Meals }]
    });

    res.status(200).json(planningData);

  } catch (err) {
    console.log(err)

    res.status(500).json(err);
  }
});
     
module.exports = router;