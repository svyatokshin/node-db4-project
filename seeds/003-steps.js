exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('steps')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('steps').insert([
				{
					step_number: '1',
          description: 'Join all ingredients',
          recipe_id: '1'
				},
				{ step_number: '2', description: "Bake Cake", recipe_id: '1' },
				{ step_number: '3', description: "Eat Cake", recipe_id: '1' }
			]);
		});
};