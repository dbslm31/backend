const express = require("express");
const app = express();
const cors = require("cors");

// Fichiers
const listRoutes = require("./routes/listRoutes");
const recipesRoutes = require("./routes/recipesRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Middlewares
app.use(cors());
app.use(express.json());

// Pour éviter les erreurs CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Routes
app.use("/list", listRoutes);
app.use("/recipes", recipesRoutes);
app.use("/menu", menuRoutes);

module.exports = app;
