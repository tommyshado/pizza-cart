function pizzaCart() {
    return {
        // properties to keep to keep the state of the pizzas
        counter: {
            // counter for pizza sizes
            small: 0,
            medium: 0,
            large: 0,
        },

        totals: {
            small: 0,
            medium: 0,
            large: 0,
            overallTotal: 0,
        },
        
        price: {
            small: 49,
            medium: 89,
            large: 129,
        },

        bought: {
            small: false,
            medium: false,
            large: false,
        },

        pizzaAvailable: {
            small: 25,
            medium: 10,
            large: 15,
        },

        // method to add a pizza to the cart
        addToCart(pizzaSize) {
            if (this.bought[pizzaSize] === true) {
                if (this.pizzaAvailable[pizzaSize] > 0) {
                    // decrement the stock
                    this.pizzaAvailable[pizzaSize]--;

                    this.counter[pizzaSize]++;
                    this.totals[pizzaSize] = this.counter[pizzaSize] * this.price[pizzaSize];

                    // set the pizza totals into the overall totals
                    this.totals.overallTotal += this.totals[pizzaSize];
                };
            };
        },

        // method to remove a pizza from the cart
        removeFromCart(pizzaSize) {
            if (this.totals.overallTotal > this.totals[pizzaSize]) {
                this.counter[pizzaSize]--;
                // set the pizza totals into the overall totals
                this.totals.overallTotal -= this.totals[pizzaSize];

                // increment the stock
                this.pizzaAvailable[pizzaSize]++;
            };
        },

        // method to set the bought property given a pizza size to true
        pizzaBought(pizzaSize) {
            this.bought[pizzaSize] = true;
        },
    };
};