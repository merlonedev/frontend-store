import React from 'react';
import CartProduct from '../components/ShoppingCart/CartProduct';
import HomeButton from '../components/Home/HomeButton';
import EmpetyCart from '../components/ShoppingCart/EmpetyCart';

class ShoppingCartPage extends React.Component {
  render() {
    const localStorageProducts = JSON.parse(localStorage.getItem('products')) || [];
    return (
      <div>
        <HomeButton />
        <h1>Carrinho de Compras</h1>
        {localStorageProducts.length > 0
          ? <CartProduct products={ localStorageProducts } /> : <EmpetyCart />}
      </div>
    );
  }
}

export default ShoppingCartPage;
