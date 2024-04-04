function updateQuantity(change, id) {
  var input = document.getElementById(id);
  var newValue = parseInt(input.value) + change;
  if (newValue < 0) newValue = 0;
  input.value = newValue;
  updateTotal();
}

function updateTotal() {
  var total = 0;
  var prices = document.querySelectorAll('.price');
  var quantities = document.querySelectorAll('.quantity-controls input');
  prices.forEach(function(price, index) {
    total += parseInt(price.getAttribute('data-price')) * quantities[index].value;
  });
  document.getElementById('totalPrice').innerText = total;
}

// Initialize total price
document.addEventListener('DOMContentLoaded', updateTotal);

const quantities = document.querySelectorAll('.quantity-controls input');
quantities.forEach(function(price, index) {
  quantities[index].addEventListener('input', (event) => updateTotal());
});

const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', (e) => {
  const totalPrice = document.getElementById('totalPrice').innerText;
  if (parseInt(totalPrice) == 0) {
    e.preventDefault();
    alert("최소 1개 이상 주문하셔야 합니다.");
  }
});
