
// factory function for the pizza cart
const instanceofPizzaCart = pizzaCart();

// adding an alphine:init event
document.addEventListener("alphine:init", () => {
    Alphine.data("pizzaCart", instanceofPizzaCart)
});