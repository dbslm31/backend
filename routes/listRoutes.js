const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

router.post("/new", listController.createMenu);
router.get("/list", listController.getMenus);
router.delete("/delete/:id", listController.deleteMenu);

module.exports = router;
