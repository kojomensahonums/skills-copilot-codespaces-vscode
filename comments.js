// Create web server

// Import modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/Comment');

// Setup server
const app = express();
const router = express.Router();
const port = 4000;

// Setup middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://endpoint:27017/comments', { useNewUrlParser: true });
