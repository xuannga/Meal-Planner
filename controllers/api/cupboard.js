const router = require('express').Router();
const { Cupboard } = require('../../models');
const withAuth = require('../../utils/auth.js');
// withAuth,
// Prevent non logged in users from viewing the homepage
router.post('/', async (req, res) => {
  try {
    const [CupboardItem,created] = await Cupboard.findOrCreate({
       where:{name:req.body.name, user_id:req.user.id} ,
       defaults: {
        ...req.body,
        user_id: req.user.id
       }
      });
      if(created){
        return res.json(CupboardItem)
      }
      else{
        const updateCupboard = await Cupboard.update(
        {quantity: parseFloat(CupboardItem.quantity) + parseFloat(req.body.quantity)},
        {where: {id: CupboardItem.id}}
      );
      return res.json(updateCupboard)
      }
    }
   catch (err) {
    console.error(err)
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

router.get('/', async (req, res) => {
  try {
    const Cupbd = await Cupboard.findAll();
    
    return res.json(Cupbd)
 
    // });
  } catch (err) {
    console.log(err)
   
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const Cupbd = await Cupboard.findAll({
      where: {
        id: req.params.id}
    });
    
    return res.json(Cupbd)
 
    // });
  } catch (err) {
    console.log(err)
   
    res.status(500).json(err);
  }
});

router.get('/:name', async (req, res) => {
  try {

    const [Cupbdd, created] = await Cupboard.findOrCreate({
      
      where: { name: req.params.name} ,

      defaults:{
        ...req.body
      }

    });
    
    if (created){return res.json(Cupbd)}


  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


module.exports=router;
