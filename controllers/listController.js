const pool = require("../db");

// Créer un nouveau menu
exports.createMenu = async (req, res) => {
  try {
    const menuTitle = req.body.menu;

    const newMenu = await pool.query(
      "INSERT INTO menulist (menu) VALUES ($1)",
      [menuTitle]
    );
    console.log("Le menu a bien été créé");
    res.json(newMenu.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur lors de la création du menu");
  }
};

//Récupérer la liste de menus déjà crées
exports.getMenus = async (req, res) => {
  try {
    const menus = await pool.query("SELECT * FROM menulist");
    res.json(menus.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur lors de la récupération des menus");
  }
};

//Supprimer un menu de la liste
