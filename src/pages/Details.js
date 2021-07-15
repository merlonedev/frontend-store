import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Details extends Component {
  addItemToCart(product) {
    if (localStorage.getItem('carrinho')) {
      const currentCart = JSON.parse(localStorage.getItem('carrinho'));
      let futureCart = [];
      const alreadyInCart = currentCart.some((item) => product.id === item.id);
      if (alreadyInCart) {
        currentCart.map((item) => {
          if (item.id === product.id) {
            item.quantity += 1;
            return item;
          }
          return item;
        });
        futureCart = [...currentCart];
      } else {
        product.quantity = 1;
        futureCart = [...currentCart, product];
      }
      localStorage.setItem('carrinho', JSON.stringify(futureCart));
    } else {
      product.quantity = 1;
      const cart = [product];
      localStorage.setItem('carrinho', JSON.stringify(cart));
    }
  }

  render() {
    const { props: { location: { state } } } = this;
    const { title, price, thumbnail } = state;
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <img alt="imagem do produto" src={ thumbnail } />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{`R$ ${price}`}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addItemToCart(state) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
