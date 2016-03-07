
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beers', function(table) {
    table.increments();
    table.integer('brewery_id').references('breweries.id');
    table.string('name');
    table.decimal('abv', 2, 1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beers');
};
