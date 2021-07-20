import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddRemoveCart extends Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
    };
    this.add = this.add.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  add() {
    this.setState((prev) => ({
      quantidade: prev.quantidade + 1,
    }));
  }

  decrease() {
    this.setState((prev2) => ({
      quantidade: prev2.quantidade === 1 ? prev2.quantidade : prev2.quantidade - 1,
    }));
  }

  render() {
    const { products, removeProduct, products: { id, price } } = this.props;
    const { quantidade } = this.state;
    return (
      <section>
        <h3>
          Carrinho De Compras
        </h3>
        <div key={ id }>
          <h1 data-testid="shopping-cart-product-name">{ products.title }</h1>
          <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
          <button type="button" onClick={ () => removeProduct(products) }>
            X
          </button>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.add }
          >
            Increase
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.decrease }
          >
            Decrease
          </button>
          <p>
            {
              (`R$ ${quantidade * price}`)
            }
          </p>
        </div>
      </section>
    );
  }
}

AddRemoveCart.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  products: PropTypes.objectOf({
    price: PropTypes.number.isRequired,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default AddRemoveCart;
