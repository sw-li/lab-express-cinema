const Movie = require("../models/Movie.model");

const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/movies", (req, res, next) => {
  Movie.find().then((result) => console.log(result));
});

module.exports = router;
