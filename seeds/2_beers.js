
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('beers').del(),

    // Inserts seed entries
    knex('beers').insert({brewery_id: 1, name: 'Yellow Fever', abv: 5.0}),
    knex('beers').insert({brewery_id: 1, name: 'Redcon', abv: 5.7}),
    knex('beers').insert({brewery_id: 2, name: 'True Blonde Ale', abv: 5.0}),
    knex('beers').insert({brewery_id: 2, name: 'Modus Hoperandi IPA', abv: 6.8})
  );
};
