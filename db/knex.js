var environment = 'development' || 'publication';
var config = require('../knexfile')[environment];
module.exports = require('knex')(config);
