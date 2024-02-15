document.addEventListener('DOMContentLoaded', function () {
  const menu = {
    mainDishes: [
      { name: 'Briyani', price: 100 },
      { name: 'Burger', price: 12 },
      { name: 'Pizza', price: 15 }
    ],
    sideItems: [
      { name: 'Potato Fry', price: 50 },
      { name: 'Onion Rings', price: 6 },
      { name: 'Mashed Potatoes', price: 4 }
    ],
    drinks: [
      { name: 'Badam Milk', price: 25 },
      { name: 'Iced Tea', price: 2 },
      { name: 'Lemonade', price: 3 }
    ],
    desserts: [
      { name: 'Falooda', price: 80 },
      { name: 'Chocolate Cake', price: 7 },
      { name: 'Ice Cream', price: 6 }
    ],
    soupSalad: [
      { name: 'Tomato Soup', price: 4 },
      { name: 'Caesar Salad', price: 6 },
      { name: 'Minestrone Soup', price: 5 }
    ]
  };

  function populateMenu(category, ulId) {
    const ul = document.getElementById(ulId);
    menu[category].forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      ul.appendChild(li);
    });
  }

  populateMenu('mainDishes', 'main-dishes');
  populateMenu('sideItems', 'side-items');
  populateMenu('drinks', 'drinks');
  populateMenu('desserts', 'desserts');
  populateMenu('soupSalad', 'soup-salad');

  document.getElementById('calculate').addEventListener('click', function () {
    const people = parseInt(document.getElementById('people').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);
    const tipAmount = parseFloat(document.getElementById('tip-amount').value);

    const items = document.querySelectorAll('#order-summary li');
    let total = 0;
    items.forEach(item => {
      const itemDetails = item.textContent.split(' - ');
      const price = parseFloat(itemDetails[1].substring(1));
      total += price;
    });

    const tax = (total * (taxRate / 100));
    const tip = tipAmount ? tipAmount : (total * 0.1); // Default tip is 10%

    const grandTotal = total + tax + tip;

    const totalDiv = document.getElementById('total');
    totalDiv.innerHTML = `
      <p>Subtotal: $${total.toFixed(2)}</p>
      <p>Tax: $${tax.toFixed(2)}</p>
      <p>Tip: $${tip.toFixed(2)}</p>
      <p>Grand Total: $${grandTotal.toFixed(2)}</p>
    `;
  });
});
