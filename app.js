const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//Middlewares
app.use(cors());
app.use(express.json());

//Pour éviter les erreurs CORS
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

app.use(bodyParser.json());

module.exports = app;
