exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruits').del()
    .then(function () {
      // Inserts seed entriesA
      return knex('fruits').insert([
        { fruit_id: 1, name: 'Banana', price: 1, image_url: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Veranda_Banana_3_FGT_650x.jpg?v=1612444136' },
        { fruit_id: 2, name: 'Mango', price: 3, image_url: 'https://cdn.shopify.com/s/files/1/1294/9917/products/image_4dc95457-7f2d-407c-932e-0a6c4763a2c4_1067x.jpg?v=1589717827' },
        { fruit_id: 3, name: 'Passion Fruit', price: 5, image_url: 'https://sc04.alicdn.com/kf/U21dcf21e693d4784bd818230804fe227E.jpg' },
        { fruit_id: 4, name: 'Coconut', price: 10, image_url: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/Coconut%20juice.jpg' },
        { fruit_id: 5, name: 'Cherries', price: 5, image_url: 'https://www.sprouts.com/wp-content/uploads/2020/05/Cherries-Square-640x640.jpg' },
        { fruit_id: 6, name: 'Avocado', price: 2, image_url: 'https://merijaruratain.com/wp-content/uploads/2020/07/avocados.jpg' },
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        { cart_id: 1, fruit_id: 1, quantity: 2 },
        { cart_id: 2, fruit_id: 2, quantity: 1 },
        { cart_id: 3, fruit_id: 3, quantity: 5 },
      ]);
    });
};