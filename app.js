//? Load Modules
const express = require("express");
require("dotenv").config();

//? Connect Database
require("./config/database.config");

//? Start Server
const app = express();

//? Start Ups
require("./startups/router.startup")(app);

//? Settings
const port = process.env.PORT || 8080;

//? API Endpoint
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to Node Server",
    info: "Developed by Md. Dilshad Alam",
  });
});

//? Listener
app.listen(port, () => {
  console.log(`Node Server is Up and Running on Port ${port}`);
  console.log(`Development Server Started at http://localhost:${port}`);
  console.log(`Requesting to Connect to Mongo Database...`);
});
