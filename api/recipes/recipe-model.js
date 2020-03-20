const db = require('../../data/db-config');

module.exports = { 
    getRecipes, 
    getShoppingList, 
    getInstructions 
};

/* - `getRecipes()`: should return a list of all recipes in the database.
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- `getInstructions(recipe_id)`:  */

//getRecipes
function getRecipes() {
	return db('recipes');
}

//recipes/1/ingredients
function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join("rec_ing as ri", "ri.recipe.id", "r.id")
        .join("ingredients as i", "i.id", "ri.ingredient_id")
        .select("r.recipe_name", "i.ingredient_name", "i.quantity")
        .where("r.id", id);
}

function getInstructions(recipe_id) {
	return db('steps')
		.join('recipes', 'recipes.id', 'steps.recipe_id')
		.where('recipe_id', recipe_id);
}
