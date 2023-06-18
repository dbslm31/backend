const axios = require("axios");

const apiKey = process.env.API_KEY;
const apiUrl = "https://api.api-ninjas.com/v1/recipe";

//Récupérer toutes les recettes
exports.getRecipes = async (req, res) => {
  try {
    const query = req.body.query;

    const response = await axios.get(apiUrl, {
      params: {
        query: query,
      },
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    res.status(200).json("Voici le résultat de la recherche");

    const recipes = response.data;
    console.log(recipes);
  } catch (error) {
    console.error(
      "Oups il y a eu une erreur pendant la récupération des recettes depuis l'API",
      error
    );
  }
};
