// Represent your Pet

const pet = {
    name: "Luna",
    species: "cat",
    nickNames: ["devil", "satan", "spawn from hell"],
    age: 2
}
console.log(pet)

// Fast food ordering
const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    orders: []
}

const chickenComboMeal = {
    sandwichType: "Cheese",
    fries: true,
    drinkSize: "Large"
}

const veggieComboMeal = {
    sandwichType: "Veggie",
    fries: false,
    drinkSize: "Medium"
}

restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(veggieComboMeal);
console.log(restaurant.orders)

