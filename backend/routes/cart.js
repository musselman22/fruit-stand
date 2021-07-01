var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['development']);


router.post('/', function (req, res) {
  if (req.body.fruit && req.body.userQuantity > 0) {
    knex('cart').insert({ fruit_id: req.body.fruit, quantity: req.body.userQuantity })
      .onConflict('fruit_id')
      .merge()
      .then(response => {
        console.log(response)
        res.status(200).send("added to cart")
      })
      .catch(err => {
        console.log(err)
        res.status(404).send("There was an error")
      })
  } else {
    res.status(400).send("must choose quantity")
  }
});

router.put('/', function (req, res) {
  if (req.body.fruit && req.body.userQuantity > 0) {
    knex('cart').insert({ fruit_id: req.body.fruit, quantity: req.body.userQuantity })
      .onConflict('fruit_id')
      .merge()
      .then(response => {
        console.log(response)
        res.status(200).send("added to cart")
      })
      .catch(err => {
        console.log(err)
        res.status(404).send("There was an error")
      })
  } else {
    res.status(400).send("must choose quantity")
  }
});

router.get('/', function (req, res) {
  knex.select('fruits.name', 'fruits.price', 'fruits.image_url', 'cart.fruit_id', 'cart.quantity').from('cart')
    .leftJoin('fruits', function () {
      this.on('fruits.fruit_id', '=', 'cart.fruit_id')
    })
    .then(response => res.status(200).json(response))
    .catch(err => res.status(404).send("There was an error"))
});

router.delete('/', function (req, res) {
  if (req.body.fruit_id) {
    knex('cart')
      .where('fruit_id', req.body.fruit_id)
      .del()
      .then(() => res.status(200).send("Item deleted"))
      .catch(err => res.status(404).send("There was an error"))
  } else {
    res.status(400).send("must choose quantity")
  }
});

module.exports = router;