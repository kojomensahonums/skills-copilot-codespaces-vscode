// Create web browser
// http://localhost:3000/comments

var express = require('express');
var router = express.Router();

// Import the model
var Comment = require('../models/comment');

// Create a comment
router.post('/', function(req, res) {
  // Create a new comment using the Comment model
  var comment = new Comment({
    content: req.body.content,});
  });