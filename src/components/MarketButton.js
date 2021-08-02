import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

class MarketButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <FiShoppingCart color="blue" />
        </Link>
      </div>
    );
  }
}

export default MarketButton;
