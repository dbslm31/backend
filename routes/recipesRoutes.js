const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

router.get(`/all`, recipesController.getRecipes);
router.get(`/:id`, recipesController.getRecipeById);
router.post(`/:id`, recipesController.addRecipeToMenu);
router.delete(`/:id`, recipesController.deleteRecipeFromMenu);
router.put(`/:id`, recipesController.updateRecipeOrder);

module.exports = router;
