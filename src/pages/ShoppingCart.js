import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
  }

  render() {
    const { location: { state: shoppingCart } } = this.props;
    const { value } = this.state;
    return (
      <>
        {shoppingCart.map((
          e,
        ) => (
          <section key={ e.id }>
            <div data-testeid="shopping-cart-product-name">
              {e.title}
            </div>
            <img src={ e.thumbnail } alt={ e.title } />
            <div>
              {e.price}
            </div>
            <label htmlFor="quantidade" data-testid="shopping-cart-product-quantity">
              Quantidade
              <input
                type="number"
                value={ value }
              />
            </label>
          </section>
        ))}
      </>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ShoppingCart;
