const router = require('express').Router();
const { Cupboard } = require('../../models');
const withAuth = require('../../utils/auth.js');
// withAuth,
// Prevent non logged in users from viewing the homepage
router.post('/', async (req, res) => {
  try {
    const newCupboard = await Cupboard.create({
        ...req.body

    });
    
    return res.json(newCupboard)
 
    // });
  } catch (err) {
    console.log(err)
   
    res.status(500).json(err);
  }
});

//Update Cupboard item - may only need to update quantity
router.put('/:id', async (req, res) => {
  try {
    const updateBlog = await Cupboard.update(
      {
        ...req.body
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

router.delete('/:id', async (req, res) => {
  try {
    const updateBlog = await Cupboard.destroy(
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

module.exports=router;
