const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.get("/", menuController.getMenuItems); // Utiliser getMenuItems au lieu de getAllMenuItems

module.exports = router;
