import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItemProduct extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      clicks: 1,
      price: 0,
      totalPrice: 0,
    };

    this.totalPrice = this.totalPrice.bind(this);
    this.minusItem = this.minusItem.bind(this);
    this.minusTotalPrice = this.minusTotalPrice.bind(this);
    this.plusItem = this.plusItem.bind(this);
    this.removeFromCart= this.removeFromCart.bind(this);
  }

  componentDidMount() {
    this.totalPrice();
  }

  totalPrice() {
    const { clicks, price } = this.state;
    this.setState({ totalPrice: (price * clicks),
    });
  }

  plusItem() {
    const { price } = this.state;
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }), () => {
      this.totalPrice(price);
    });
  }
  // talvez tenha que usar um onchange

  minusItem() {
    const { clicks } = this.state;
    if (clicks === 0 || clicks > 1) {
      this.setState({ clicks: clicks - 1 });
    }
    this.totalPrice();
  }

  minusTotalPrice() {

  }

  removeFromCart() {
    localStorage.clear()
  }
  /* this.setState((state) => ({
    product: state.product.filter((product) => product.id !== id),
  })); */
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    const { totalPrice, clicks } = this.state;
          return (
            <>
            <li key={ title }>
              <button
                type="button"
                onClick={ this.removeFromCart }
              >
                X
              </button>
              <div data-testid="product">
                <p data-testid="shopping-cart-product-name">{title}</p>
                <img src={ thumbnail } alt={ title } />
                <p>{price}</p>
              </div>
              <h2 data-testid="shopping-cart-product-quantity">{ clicks }</h2>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ () => {
                  this.plusItem(id);
                  this.totalPrice(price);
                } }
              >
                +
              </button>
              <button
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ () => {
                  this.minusItem(id);
                  this.minusTotalPrice(price, clicks);
                }}
              >
                -
              </button>
              <p>{ `R$${(price * clicks).toFixed(2)}` }</p>
            </li>
              <h3>{`Valor Total da Compra: R$${totalPrice.toFixed(2)}`}</h3>
              </>
       )
  }
}

// ajeitar pois ta aparecendo todos os botoes, e o valor total da compra

CartItemProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
