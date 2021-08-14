const router = require('express').Router();
const { Cupboard } = require('../../model');
const withAuth = require('../../utils/auth.js');
// withAuth,
// Prevent non logged in users from viewing the homepage
router.post('/',  withAuth, async (req, res) => {
  try {
    const newCupboard = await Cupboard.create({
        fooditem: req.body.food_item,
        quantity: req.body.quantity,
        unitOfMeasure:  req.session.unit_of_measure,
        expDate: req.session.exp_date
    });
    
    return res.json(newCupboard)
 
    // });
  } catch (err) {
    console.log(err)
   
    res.status(500).json(err);
  }
});

//Update Cupboard item - may only need to update quantity
router.put('/:id',  withAuth, async (req, res) => {
  try {
    const updateBlog = await Cupboard.update(
      {
        fooditem: req.body.food_item,
        quantity: req.body.quantity,
        unitOfMeasure:  req.session.unit_of_measure,
        expDate: req.session.exp_date
      },
      {where: {
        id: req.params.id}
  });
    
    return res.json(updateBlog)
 
    // });
  } catch (err) {
    console.log(err)
   
    res.status(500).json(err);
  }
});

router.delete('/:id',  withAuth, async (req, res) => {
  try {
    const updateBlog = await Cupboard.destroy(
      {title: req.body.title,
        content: req.body.content,
        commentor:  req.session.user_id},
      {where: {
        id: req.params.id}
  });
    
    return res.json(updateBlog)
 
    // });
  } catch (err) {
    console.log(err)
   
    res.status(500).json(err);
  }
});