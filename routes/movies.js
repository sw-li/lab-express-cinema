const Movie = require("../models/Movie.model");

const express = require("express");
const router = express.Router();

/* GET home page */

router.get("/movie/:id",(req,res)=>{
  Movie.findById(req.params.id)
  .then(result=>{
    res.render("movie-details", result)
  })
})


router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((result) => {
    res.render("movies", {result})})
});

module.exports = router;
