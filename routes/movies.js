const Movie = require("../models/Movie.model");

const express = require("express");
const router = express.Router();

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movie.find().then((result) => {
    console.log(result);
    res.render("movies", { result });
  });
});

module.exports = router;
