const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
	Recipes.getRecipes()
		.then(recipes => {
			res.json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get recipes' });
		});
});

router.get('/:id/ingredients', (req, res) => {
	const { id } = req.params;

	Recipes.getShoppingList(id)
		.then(recipes => {
			res.json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get recipes' });
		});
});

router.get('/:id/steps', (req, res) => {
	const { id } = req.params;

	Recipes.getInstructions(id)
		.then(recipes => {
			console.log('working?');
			res.json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get recipes' });
		});
});

module.exports = router;