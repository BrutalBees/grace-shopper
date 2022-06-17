const router = require('express').Router();
const { models: { Cart } } = require('../db');
module.exports = router;


// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll()
    res.json(cart)
  } 
  catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const productToAdd = await Cart.create(req.body)
    res.json(productToAdd)
  } catch (error) {
    next(error)
  }
});