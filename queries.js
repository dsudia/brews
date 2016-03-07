var knex = require('./db/knex');

module.exports = {
    getBreweries: function(){
        // Get all breweries
        return knex('breweries').select();
    },
    getBrewery: function(id){
        // Get one brewery that matches the id
        return knex('breweries').where('id', id);
    },
    getBeers: function(){
        // Get beers and brewery data
        // Alias the beer name to beer_name and the brewery name to brewery_name
        return knex('beers').select('breweries.name AS brewery_name', 'beers.name AS beer_name', 'beers.abv')
          .innerJoin('breweries', 'beers.brewery_id', 'breweries.id');
    },
    getBeersByBrewery: function(brewery_id){
        // Get beers and brewery data for a single brewery
        // Alias the beer name to beer_name and the brewery name to brewery_name
        return knex('beers').select('beers.brewery_id AS brewery_name', 'beers.name AS beer_name', 'beers.abv')
          .innerJoin('breweries', 'beers.brewery_id', 'breweries.id')
          .where('breweries.id', brewery_id);
    }
};
