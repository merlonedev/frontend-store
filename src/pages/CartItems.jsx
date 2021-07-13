import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import ProductInCart from '../components/ProductInCart';

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItens: [
        ...this.loadItens(),
      ],
    };
    this.loadItens = this.loadItens.bind(this);
  }

  loadItens() {
    const keys = Object.keys(localStorage);
    return keys.map((key) => JSON.parse(localStorage.getItem(key)));
  }

  render() {
    const { cartItens } = this.state;
    console.log(cartItens);
    return (
      <div>
        <Link to="/"><TiArrowBack /></Link>
        <FiShoppingCart />
        Carrinho de Compras
        {
          cartItens.length > 0
            ? cartItens.map((cartItem) => (
              <ProductInCart
                key={ cartItem.id }
                product={ cartItem }
              />
            ))
            : <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        }
      </div>
    );
  }
}

export default CartItems;
