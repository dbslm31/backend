const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

router.get(`/all`, recipesController.getRecipes);
router.get(`/:id`, recipesController.getRecipeById);

module.exports = router;
