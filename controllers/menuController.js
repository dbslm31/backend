const pool = require("../db");

exports.getAllMenuItems = async (req, res) => {
  try {
    const query = "SELECT * FROM menu";
    const menuItems = await pool.query(query);
    res.json(menuItems.rows);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send(
        "Une erreur s'est produite lors de la récupération des éléments du menu"
      );
  }
};
