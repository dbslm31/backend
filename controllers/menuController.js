const pool = require("../db");

exports.getMenuItems = async (req, res) => {
  try {
    const query = "SELECT * FROM menu";
    const result = await pool.query(query);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Une erreur s'est produite lors de la récupération du menu.");
  }
};
