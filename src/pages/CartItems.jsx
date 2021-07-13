import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';

class CartItems extends React.Component {
  render() {
    const { cartItens } = this.props;
    return (
      <div>
        <FiShoppingCart />
        Carrinho de Compras
        {
          cartItens.lenght > 0 ?
          cartItens.map((cartItem) => (
            <ProductCard
              key={ cartItem.id }
              product={ cartItem }
            />
          ))
          :
          <div data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </div>
        }
      </div>
    );
  }
}

export default CartItems;
