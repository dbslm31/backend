const axios = require("axios");

const apiKey = process.env.API_KEY;
const apiUrl = "https://api.api-ninjas.com/v1/recipe";

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
