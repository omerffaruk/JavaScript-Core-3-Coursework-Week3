let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let total = 0;

order.forEach((order) => {
  const {quantity, itemName} = order;
  const itemTotal = order.unitPrice * order.quantity;
  total += itemTotal;
  console.log(quantity, itemName, itemTotal);
})

console.log(total);



