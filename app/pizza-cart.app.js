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

        // payment I will get from the user
        payment: "",

        // payment I will send to the user
        paymentFeedback: "",
        
        // method to add a pizza to the cart
        addToCart(pizzaSize) {
            // if (this.buy[pizzaSize] === true) {
                if (this.pizzaAvailable[pizzaSize] > 0) {
                    // set the pizza in the buy object
                    this.buy[pizzaSize] = true;
                    // decrement the stock
                    this.pizzaAvailable[pizzaSize]--;

                    this.counter[pizzaSize]++;
                    this.totals[pizzaSize] = this.counter[pizzaSize] * this.price[pizzaSize];

                    // invoke the function to enable the button for checking out
                    // this.showCheckOutBtn();
                };
            // };
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
        // pizzaBought(pizzaSize) {
        //     this.buy[pizzaSize] = true;

        //     // increment the counter property for the first time then...
        //     this.counter[pizzaSize]++;
        //     // decrement the in-stock property and...
        //     this.pizzaAvailable[pizzaSize]--;

        //     // totals
        //     this.totals[pizzaSize] += this.price[pizzaSize];
        // },

        get showCartAndBtn() {
            return (this.counter.small > 0 || this.counter.medium > 0 || this.counter.large > 0);
                // set the checkout property to true
                // this.checkOut = true;
        },

        showPayElement() {
            this.showElement = true;
        },

        // function to send payment feedback to the user
        sendPaymentFeedback() {
            if (Number(this.payment) === this.totals.overallTotal) {
                // enough payment
                this.paymentFeedback = "Enjoy your pizza.";

            } else if (Number(this.payment) < this.totals.overallTotal)  {
                // not enough payment
                this.paymentFeedback = "Sorry - that is not enough money!";

            } else if (Number(this.payment) > this.total) {
                const pizzaChange = Number(this.payment) - this.totals.overallTotal;
                // set the change property with the variables
                this.paymentFeedback = `Your change is ${pizzaChange}`;
            };

            // setting the x-model to default
            this.payment = "";

            // reseting the totals to default
            this.totals.small = 0.00;
            this.totals.medium = 0.00;
            this.totals.large = 0.00;
            this.totals.overallTotal = 0.00;

            // setting the pizzas available by decreasing the pizzas that are available with
            // the counter added by the user
            this.pizzaAvailable.small -= this.counter.small;
            this.pizzaAvailable.medium -= this.counter.medium;
            this.pizzaAvailable.large -= this.counter.large;

            // reseting the counters to default
            setTimeout(() => {
                this.counter.small = 0.00;
                this.counter.medium = 0.00;
                this.counter.large = 0.00;
                this.paymentFeedback = "";
            }, 3000)


        },
    };
};