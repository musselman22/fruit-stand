
exports.up = function (knex) {
  return knex.schema
    .createTable('fruits', table => {
      table.increments('fruit_id').primary().notNullable(); // adds an auto incrementing PK column
      table.string('name');
      table.integer('price');
      table.string('image_url');
    })
    .then(() => {
      return knex.schema
        .createTable('cart', table => {
          table.increments('cart_id').primary().notNullable(); // adds an auto incrementing PK column
          table.integer('fruit_id').references('fruit_id').inTable('fruits');
          table.integer('quantity');
        });
    })


};

exports.down = function (knex) {
  return knex.schema
    .dropTable('cart')
    .dropTable('fruits');

};


