var express = require("express");
var router = express.Router();
var knex = require('../db/knex');

router.get("/", function(request, response, next) {
    response.render("index");
});

module.exports = router;
