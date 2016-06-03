var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      var noMushrooms = function(x) { return _(x.ingredients).all(function(y) { return y !== "mushrooms"})};
      var pizzaWithoutNuts  = _(products).filter(function(row){return row.containsNuts === false;})
      var pizzaWithoutMushroomsOrNuts  = _(pizzaWithoutNuts).filter(noMushrooms);
     // productsICanEat = _(pizzaWithoutNuts).filter(function(row){return _(row.ingredients).any(function(x) { return x === "mushrooms" })
      var len = pizzaWithoutNuts.length;
      productsICanEat = pizzaWithoutMushroomsOrNuts;
      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

      expect(_.range(3)).toEqual([0,1,2]);
      expect(_.range(1, 4)).toEqual([1,2,3]);
      expect(_.range(0, -4, -1)).toEqual([0,-1,-2,-3]);

            var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

    var sum = FILL_ME_IN;    /* try chaining range() and reduce() */
    var array3 = (_.range(3, 1000, 3));
    var array5 = (_.range(5, 1000, 5));
    var array35 = array3;
    _.each(array5, function(value, key, list) { if (!_.contains(array3, value)) { array35.push(value); }});

    //var sum3 = (_.range(3, 1000, 3)).reduce(function (sum, x) { return sum + x });
    //var sum5 = (_.range(5, 1000, 5)).reduce(function (sum, x) { return sum + x });
    sum = array35.reduce(function (sum, x) { return sum + x });

    //sum = _(_.range(3, 1000, 3)).chain()
    //          _.each((_.range(5, 1000, 5)), function(value, key, list) { if (!(.contains(value))) { array35.push(value); }});
    

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    var result = _(products).chain()
                       .map(function(x) { return x.ingredients } )
                       .flatten()
                       .reduce(function (sum, x) { if(x === 'mushrooms') sum += 1; return sum }, 0)
                       .value();


    expect(result).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
