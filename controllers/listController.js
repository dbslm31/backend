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
    res
      .status(500)
      .send("Oups, il y a eu une erreur pendant la création du menu");
  }
};

//Récupérer la liste de menus déjà crées
exports.getMenus = async (req, res) => {
  try {
    const menus = await pool.query("SELECT * FROM menulist");
    res.json(menus.rows);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send("Oups, il y a eu une erreur pendant la récupération des menus");
  }
};

//Supprimer un menu de la liste
exports.deleteMenu = async (req, res) => {
  try {
    const menuId = req.params.id;

    await pool.query("DELETE FROM menulist WHERE id = $1", [menuId]);
    console.log("Le menu a bien été supprimé");
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send("Oups, il y a eu une erreur pendant la suppression du menu");
  }
};
