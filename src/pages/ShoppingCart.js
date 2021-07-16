import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };

    this.empyCart = this.empyCart.bind(this);
  }

  empyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { location: { state: shoppingCart } } = this.props;
    const { value } = this.state;
    if (shoppingCart.length === 0) return this.empyCart();

    return (
      <main>
        { shoppingCart.map((product) => (
          <section key={ product.id }>
            <h3>{ product.title }</h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <h6>{ `Preço: R$ ${product.price} ` }</h6>
            <label htmlFor="quantidade" data-testid="shopping-cart-product-quantity">
              Quantidade
              <input
                type="number"
                value={ value }
              />
            </label>
          </section>
        )) }
      </main>
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
