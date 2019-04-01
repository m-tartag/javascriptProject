const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

var salesTax = 1.07;

var product1 = {
    name: "Coffee",
    price: 4.00
}

var product2 = {
    name: "Iced Tea",
    price: 5.00
}
var product3 = {
    name: "Hot Chocolate",
    price: 6.00
}

var salesTax = 1.07; 

var totalPrice1 = formatter.format(product1['price'] * salesTax);
var totalPrice2 = formatter.format(product2['price'] * salesTax);
var totalPrice3 = formatter.format(product3['price'] * salesTax);

var readline = require("readline-sync");
var order = readline.question("What can I get you? ");
var order = order.toLowerCase();

if (order === "coffee") {
    console.log("You ordered a " + product1['name'] + ". You owe " + totalPrice1);
} else if (order === 'iced tea') {
    console.log("You ordered a " + product2['name'] + ". You owe " + totalPrice2);
} else if (order === 'hot chocolate') {
    console.log("You ordered a " + product3['name'] + ". You owe " + totalPrice3);
} else {
    console.log("Sorry that is not available")
}




