const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes')

router.get('/recipes', recipesController.getRecipes)

router.get('/addRecipe', recipesController.addRecipe)

router.get('updateRecipe/:id', recipesController.updateRecipe)

router.get('/deleteRecipe/:id', recipesController.deleteRecipe)
 

module.exports = router;