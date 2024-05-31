const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartQuantity = document.getElementById('cart-quantity');
const cartQuantityIcons = document.querySelectorAll('.cart-quantity');

let totalQuantity = 0;

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    totalQuantity++;
    cartQuantity.textContent = totalQuantity;
    cartQuantityIcons[index].textContent = parseInt(cartQuantityIcons[index].textContent) + 1;
  });
});

document.getElementById('purchase').addEventListener('click', () => {
  alert('Thank you for your purchase!');
  totalQuantity = 0;
  cartQuantity.textContent = totalQuantity;
  cartQuantityIcons.forEach(icon => icon.textContent = '0');
});

document.getElementById('reset').addEventListener('click', () => {
  totalQuantity = 0;
  cartQuantity.textContent = totalQuantity;
  cartQuantityIcons.forEach(icon => icon.textContent = '0');
});


function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('searchResults');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}