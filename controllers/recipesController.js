const axios = require("axios");
const pool = require("../db");

//Récupérer toutes les recettes
exports.getRecipes = async (req, res) => {
  const axios = require("axios");

  const { query } = req.body;

  const options = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?${query}`,
    headers: {
      "X-RapidAPI-Key": "dee7f09561mshc6dcbfc0ec71aadp179958jsn32a3b9d31700",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Afficher les informations d'une recette
exports.getRecipeById = async (req, res) => {
  const { id } = req.params;
  const options = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
    headers: {
      "X-RapidAPI-Key": "dee7f09561mshc6dcbfc0ec71aadp179958jsn32a3b9d31700",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

//Ajouter une recette au menu
exports.addRecipeToMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const url = req.url;

    const recipeId = id.split("/").pop();

    const newRecipe = await pool.query(
      "INSERT INTO menu (recipe_id, recipe_url) VALUES ($1, $2)",
      [parseInt(recipeId), url]
    );
    console.log("La recette à bien été ajoutée");
    res.json(newRecipe.rows[0]);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send(
        "Oups, il y a eu une erreur pendant l'ajout de la recette au menu'"
      );
  }
};

//Supprimer une recette du menu
exports.deleteRecipeFromMenu = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRecipe = await pool.query(
      "DELETE FROM menu WHERE recipe_id = $1",
      [id]
    );
    console.log("La recette a bien été supprimée du menu");
    res.json(deletedRecipe.rows[0]);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send(
        "Oups, une erreur s'est produite lors de la suppression de la recette du menu."
      );
  }
};

//Modifier l'ordre de la recette dans le menu
// Modifier l'ordre de la recette dans le menu
exports.updateRecipeOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { newOrder } = req.body;

    const updatedRecipe = await pool.query(
      "UPDATE menu SET id = $1 WHERE recipe_id = $2",
      [newOrder, id]
    );
    console.log("L'ordre de la recette a été modifié dans le menu");
    res.json(updatedRecipe.rows[0]);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send(
        "Oups, une erreur s'est produite lors de la modification de l'ordre de la recette dans le menu."
      );
  }
};
