
exports.up = function(knex) {
	return knex.schema

		.createTable('recipes', tbl => {
			tbl.increments();
			tbl.string('recipe_name', 255).notNullable().unique();
		})

		.createTable('ingredients', tbl => {
			tbl.increments();
			tbl.string('ingredient_name', 255).notNullable();
			tbl.integer('quantity').notNullable();
		})

		.createTable('steps', tbl => {
			// creates a primary key called id
			tbl.increments();

			tbl.integer('step_number').notNullable();

			tbl.string('description', 400).notNullable();

			//FOREIGN KEY
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		})

		.createTable('rec_ing', tbl => {
			//composite key
			tbl.primary(['recipe_id', 'ingredient_id']);
			//FOREIGN KEY
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
			//FOREIGN KEY
			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('rec_ing')
		.dropTableIfExists('steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};