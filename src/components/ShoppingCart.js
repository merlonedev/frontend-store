import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  quantity() {
    const { allCart } = this.props;
    let quantidade = 0;
    for (let index = 0; index < allCart.length; index += 1) {
      for (let produto = 0; produto < allCart.length; produto += 1) {
        if (allCart[produto] === allCart[index]) {
          quantidade += 1;
        }
      }
    }
    return quantidade;
  }

  render() {
    const { allCart } = this.props;
    if (allCart.length === 0) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <div
        data-testid="product"
      >
        <ul>
          {allCart.map((item) => (
            <div key={ item.id }>
              <img alt="Foto do produto" src={ item.thumbnail } />
              <div className="product-card-body">
                <h4 data-testid="shopping-cart-product-name">{item.title}</h4>
                <h5 className="product-card-price">{`Preço: R$${item.price}`}</h5>
                <h6 data-testid="shopping-cart-product-quantity">
                  Quantidade:
                  {this.quantity()}
                </h6>
                <Link to="/">Voltar para a page inicial</Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  allCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
