import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartLink extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <img src="https://image.flaticon.com/icons/png/512/263/263142.png" alt="ícone de carrinho de compras" className="icon-size" />

        </Link>
      </div>
    );
  }
}

export default ShoppingCartLink;
