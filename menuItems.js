//ALL THE MENU ITEMS OBJECTS

const pizzaItems = [
    {
      img: 'img/pizzaImg/compressed/slide0.png',
      name: 'Margherita',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, extra-virgin olive oil. - 500g',
      price: 3.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },
    },
  
    {
      img: 'img/pizzaImg/compressed/slide1.png',
      name: 'Tonno',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, tuna chunks, onion, green olives. - 500g',
      price: 4.59,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide2.png',
      name: 'Quattro stagioni',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, salami, prosciutto cotto, mushrooms, red pepper. - 500g',
      price: 4.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide3.png',
      name: 'Quattro formagi',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, blue cheese, brie, parmigiano. - 500g',
      price: 4.79,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide4.png',
      name: 'Diavola',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, spicy salami. - 500g',
      price: 4.39,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide5.png',
      name: 'Salami',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, salami. - 500g',
      price: 4.39,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide6.png',
      name: 'Cotto funghi',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, prosciutto cotto, mushrooms. - 500g',
      price: 4.29,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide7.png',
      name: 'Vegetarian',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, olives, mushrooms, red pepper, sweet corn, onion. - 500g',
      price: 3.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide8.png',
      name: 'Capricciosa',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, prosciutto cotto, mushrooms, olives. - 500g',
      price: 4.19,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide9.png',
      name: 'Marinara',
      ingredients: 'dough, tomato sauce, fresh basil, extra-virgin olive oil. - 500g',
      price: 3.59,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide10.png',
      name: 'Pollo',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, chicken, olives, tomatoes, feta cheese. - 500g',
      price: 5.19,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide0.png',
      name: 'Salsiccia',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, pork sausage, red pepper, red onion. - 500g',
      price: 4.69,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide1.png',
      name: 'Frutti di Mare',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, shrimp, mussels, calamari. - 500g',
      price: 6.59,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pizzaImg/compressed/slide2.png',
      name: 'Boscaiola',
      ingredients: 'dough, tomato sauce, mozzarella, fresh basil, mushrooms, pork sausage, tomatoes. - 500g',
      price: 4.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    }
  ]
  
  const pastaItems = [
    {
      img: 'img/pastaImg/compressed/slide0.png',
      name: 'Pasta Alla Norma',
      ingredients: 'cannelloni, eggplant, ripe tomatoes, ricotta, garlic, basil, olive oil, salt and pepper. - 475g',
      price: 5.19,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pastaImg/compressed/slide2.png',
      name: 'Ragu alla Bolognese',
      ingredients: 'tagliatelle, ragu alla bolognese sauce, parmigiano. - 450g',
      price: 5.79,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pastaImg/compressed/slide3.png',
      name: 'Carbonara',
      ingredients: 'rigatonni, pancetta, bacon, eggs, black pepper, pecorino romano. - 450g',
      price: 5.29,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pastaImg/compressed/slide4.png',
      name: 'Ragù Napoletano',
      ingredients: 'paccheri, prosciutto, guanciale, red wine, onion, garlic, parsley. - 420g',
      price: 4.49,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pastaImg/compressed/slide5.png',
      name: 'Pesto alla Genovese',
      ingredients: 'gnocchi, basil, pine nuts, olive oil, garlic, parmigiano. - 400g',
      price: 5.89,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pastaImg/compressed/slide6.png',
      name: 'Lasagna',
      ingredients: 'lasagna pasta, bolognese sauce, bechamel sauce, mozzarella. - 350g',
      price: 5.69,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pastaImg/compressed/slide7.png',
      name: 'Pasta All Forno',
      ingredients: 'rigatonni, mozzarella, ragu alla bolognese, parmigiano. - 380g',
      price: 5.19,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/pastaImg/compressed/slide0.png',
      name: 'Cacio e Pepe',
      ingredients: 'spaghetti, olive oil, pecorino romano, black peper. - 400g',
      price: 3.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
  ]
  
  const dessertItems = [
    {
      img: 'img/dessertsImg/compressed/tiramisu.png',
      name: 'Tiramisu',
      ingredients: 'little fingers, espresso, mascarpone, egg yolks, egg whites, sugar, marsala wine - 300g',
      price: 1.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/dessertsImg/compressed/eclair.png',
      name: 'Eclair',
      ingredients: 'vanilla cream, butter, flour, milk, eggs, chocolate ganache - 2 pieces',
      price: 1.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/dessertsImg/compressed/pavlova.png',
      name: 'Pavlova',
      ingredients: 'meringue, whipped cream, fresh strawberries and raspberries - 300g',
      price: 2.29,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/dessertsImg/compressed/brownie.png',
      name: 'Brownie',
      ingredients: 'dark chocolate, nuts, butter, flour, milk, eggs - 150g',
      price: 2.49,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/dessertsImg/compressed/tart.png',
      name: 'Apple tart',
      ingredients: 'butter, flour, eggs ,apples, sugar - 190g',
      price: 2.69,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/dessertsImg/compressed/cake.png',
      name: 'Chocolate cake',
      ingredients: 'chocolate, butter, flour, eggs, chocolate chips - 200g',
      price: 2.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
  ]
  
  const drinkItems = [
    {
      img: 'img/drinksImg/compressed/cola.png',
      name: 'Coca Cola',
      ingredients: '500 ml',
      price: 1.49,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/drinksImg/compressed/fanta.png',
      name: 'Fanta',
      ingredients: '500 ml',
      price: 1.49,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/drinksImg/compressed/7up.png',
      name: '7even Up',
      ingredients: '500 ml',
      price: 1.49,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/drinksImg/compressed/pepsi.png',
      name: 'Pepsi',
      ingredients: '500 ml',
      price: 1.49,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/drinksImg/compressed/mineral.png',
      name: 'Mineral Water',
      ingredients: '500 ml',
      price: 0.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/drinksImg/compressed/still.png',
      name: 'Still Water',
      ingredients: '500 ml',
      price: 0.99,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/drinksImg/compressed/beer.png',
      name: 'Beer',
      ingredients: '500 ml',
      price: 1.49,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
    {
      img: 'img/drinksImg/compressed/cider.png',
      name: 'Cider',
      ingredients: '500 ml',
      price: 1.39,
      quantity: 0,
      textCounter: 0,
      totalPrice: function() {
        return +(this.quantity * this.price).toFixed(2);
      },

    },
  ]
  
  export const allTheMenuItems = [pizzaItems, pastaItems, dessertItems, drinkItems];