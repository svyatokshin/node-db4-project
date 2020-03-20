const express = require('express');

const RecipesRouter = require('./api/recipes/recipe-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

module.exports = server;
