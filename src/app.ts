const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }]

const mappedpizzas = pizzas.map(pizza => pizza.name.toUpperCase())

console.log(mappedpizzas)

const pizza = {
  name: 'Blazing Inferno',
  getName: () => pizza.name,
}

console.log(pizza.getName())