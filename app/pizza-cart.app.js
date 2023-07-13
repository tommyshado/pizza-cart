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

        buy: {
            small: false,
            medium: false,
            large: false,
        },

        pizzaAvailable: {
            small: 25,
            medium: 10,
            large: 15,
        },

        // checkOut: false,
        
        showElement: false,
        
        // payment properties
        userChange: "",
        payment: "",
        paymentFeedback: "",
        
        // method to add a pizza to the cart
        addToCart(pizzaSize) {
            if (this.buy[pizzaSize] === true) {
                if (this.pizzaAvailable[pizzaSize] > 0) {
                    // decrement the stock
                    this.pizzaAvailable[pizzaSize]--;

                    this.counter[pizzaSize]++;
                    this.totals[pizzaSize] = this.counter[pizzaSize] * this.price[pizzaSize];

                    // invoke the function to enable the button for checking out
                    // this.showCheckOutBtn();
                };
            };
        },

        // method to remove a pizza from the cart
        removeFromCart(pizzaSize) {
            if (this.totals.overallTotal > 0) {
                this.counter[pizzaSize]--;
                this.totals[pizzaSize] -= this.price[pizzaSize];

                this.totals.overallTotal -= this.totals[pizzaSize];

                // increment the stock
                this.pizzaAvailable[pizzaSize]++;
            };
        },

        // totals for pizza
        get total() {
            this.totals.overallTotal = this.totals.small + this.totals.medium + this.totals.large
            return this.totals.overallTotal;
        },

        // method to set the bought property given a pizza size to true
        pizzaBought(pizzaSize) {
            this.buy[pizzaSize] = true;

            // increment the counter property for the first time
            this.counter[pizzaSize]++;
        },

        get showCheckOutBtn() {
            return (this.counter.small > 0 || this.counter.medium > 0 || this.counter.large > 0);
                // set the checkout property to true
                // this.checkOut = true;
        },

        showPayElement() {
            this.showElement = true;
        },

        bill(pizzaSize) {

            if (this.buy[pizzaSize] === true) {
                if (this.payment === this.price[pizzaSize]) {
                    // enough payment
                    this.paymentFeedback = "Enjoy your pizza.";

                } else if (this.payment < this.price[pizzaSize])  {
                    // not enough payment
                    this.paymentFeedback = "Sorry - that is not enough money!";

                } else if (this.payment > this.price[pizzaSize]) {
                    let pizzaChange = this.payment - this.price[pizzaSize];
                    // set the change property with the variables
                    this.userChange = `Your change is ${pizzaChange}`;
                };
            };
        },
    };
};