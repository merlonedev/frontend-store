export function saveCart(cart) {
  let cartItems = JSON.parse(localStorage.getItem('cart'));
  if (!cartItems) {
    cartItems = [];
  }

  // Adiciona o carrinho ao localStorage
  cartItems.push(cart);
  localStorage.setItem('cart', JSON.stringify([...cartItems]));
}

export function getCartItems() {
  let cartItems = JSON.parse(localStorage.getItem('cart'));
  if (cartItems === null) {
    cartItems = [];
  }
  return cartItems;
}

export function getCartItemsQuantity() {
  let cartItems = JSON.parse(localStorage.getItem('cart'));
  if (cartItems === null) {
    cartItems = [];
  }
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
}
