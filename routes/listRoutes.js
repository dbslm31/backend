const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

router.post("/new", listController.createMenu);
router.get("/list", listController.getMenus);

module.exports = router;
