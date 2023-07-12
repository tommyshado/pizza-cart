function pizzaCart() {
    // Return statement
    return {
        // Properties to keep track of the totals
        totalForPizza: 0,

        // pizza totals
        smallPizzaTotal: 0,
        mediumPizzaTotal: 0,
        largePizzaTotal: 0,

        // properties for counters


        // Create a property and map the property with the object that contains the price of the different pizzas and
        // the number of pizzas available then...

        pizzaData: {
            // small pizza data container
            small: {
                price: 49.00,
                "in-stock": 10,
                buy: false,
            },

            // medium pizza data container
            medium: {
                price: 89.00,
                "in-stock": 15,
                buy: false,
            },

            // large pizza data container
            large: {
                price: 129.00,
                "in-stock": 6,
                buy: false,
            },
        },

        // Create a function that adds a small pizza, medium pizza and large pizza to the pizza cart, the function should add the price of the pizza
        // and decrement the number of pizzas in stock, the number of pizzas in stock will decrement only when the pizza is available then...

        addPizzaToCart(pizzaSize) {

            // Store the pizzaData reference for a size the pizzaSize will always be truthy in this
            let pizza = this.pizzaData[pizzaSize];

            /* I could not get the reference of the totals when I put them into these variables below:
                            here I was trying to avoid repeatition:
            
                            let total = this.totalForPizza;
                            let smallTotal = this.smallPizzaTotal;
                            let mediumTotal = this.mediumPizzaTotal;
                            let largeTotal = this.largePizzaTotal;
            */

            // Check if the stock levels in greater 0 then...

            if (pizza["in-stock"] > 0) {

                if (pizza.buy === true) {
                    
                    // Check if the pizza variable contains small pizza then...
                    if (pizzaSize === "small") {
    
                        // add the price of the pizza to the smallPizzaTotal property and...
                        this.smallPizzaTotal += pizza.price;
                        // add the price of the pizza to the totalForPizza property
                        this.totalForPizza += pizza.price;
                        // minus the small pizza in stock value then...
                        pizza["in-stock"]--;
    
    
                    } else if (pizzaSize === "medium") {
    
                        // add the price of the pizza to the mediumPizzaTotal property and...
                        this.mediumPizzaTotal += pizza.price;
                        // get the reference from the pizzaData object property price value then add to the and...
                        this.totalForPizza += pizza.price;
                        // minus the medium pizza in stock value then...
                        pizza["in-stock"]--;
    
    
                    } else if (pizzaSize === "large") {
    
                        // add the price of the pizza to the smallPizzaTotal property and...
                        this.largePizzaTotal += pizza.price;
                        // add the price of the pizza to the totalForPizza property
                        this.totalForPizza += pizza.price;
                        // minus the large pizza in stock value then...
                        pizza["in-stock"]--;
                    }
                }
                
            }
        },

        // Create a function that removes the price of pizzas added to pizzaAddedToCart property then increment the number of pizza in stock accordingly
        // and the number of pizza added to the pizza should not exceed the "in stock" value then...

        removePizzaFromCart(pizzaSize) {

            // Store the pizzaData reference for a size the pizzaSize will always be truthy in this
            let pizza = this.pizzaData[pizzaSize];


            // Check if the variables of the total properties is greater than 0 then...
            if (this.totalForPizza > 0) {

                // check if the smallPizzaTotal, mediumPizzaTotal and largePizzaTotal properties exceeds the total then..

                // Check if the pizza variable contains small pizza then...
                if (pizzaSize === "small") {
                    // minus the price of the pizza to the smallPizzaTotal property and...
                    this.smallPizzaTotal -= pizza.price;
                    // minus the price of the pizza to the totalForPizza property
                    this.totalForPizza -= pizza.price;
                    // add the small pizza in stock value then...
                    pizza["in-stock"]++;


                } else if (pizzaSize === "medium") {
                    // minus the price of the pizza to the mediumPizzaTotal property and...
                    this.mediumPizzaTotal -= pizza.price;
                    // get the reference from the pizzaData object property price value then add to the and...
                    this.totalForPizza -= pizza.price;
                    // add the medium pizza in stock value then...
                    pizza["in-stock"]++;


                } else if (pizzaSize === "large") {
                    // minus the price of the pizza to the smallPizzaTotal property and...
                    this.largePizzaTotal -= pizza.price;
                    // minus the price of the pizza to the totalForPizza property
                    this.totalForPizza -= pizza.price;
                    // add the large pizza in stock value then...
                    pizza["in-stock"]++;
                }
            }
        },

        setBuyToTrue(pizzaSize) {
            // set the pizza buy to true
            this.pizzaData[pizzaSize].buy = true;
        },

        // Create a function that allows a user to make a payment. Payment can only be made if the amount that the user pay with is enough and...
        // Decrement the in stock value for a small, medium and large pizza permanently.
    };
}
