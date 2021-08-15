const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredient')

router.get('/ingredient', ingredientController.getIngredient)

router.get('/addIngredent', ingredientController.addIngredient)

router.get('updateIngredient/:id', ingredientController.updateIngredient)

router.get('/deleteIngredient/:id', ingredientController.deleteIngredient)
 

module.exports = router;