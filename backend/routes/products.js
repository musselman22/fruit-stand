var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['development']);


/* GET users listing. */
router.get('/', function (req, res) {
  knex.select().table('fruits')
    .then(response => res.status(200).json(response))
    .catch(err => res.status(404).send("There was an error"))
});

module.exports = router;
