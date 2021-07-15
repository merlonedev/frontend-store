import React from 'react';
import PropTypes from 'prop-types';

class CartProductItem extends React.Component {
  constructor() {
    super();

    console.log('teste');
    this.state = {
      count: 1,
    };

    this.plusCount = this.plusCount.bind(this);
    this.minusCount = this.minusCount.bind(this);
  }

  componentDidMount() {
    const { product, plusPrice } = this.props;
    plusPrice(product.price);
  }

  plusCount() {
    const { plusPrice, product } = this.props;
    const { price } = product;
    this.setState((oldState) => ({
      count: oldState.count + 1,
    }));
    plusPrice(price);
  }

  minusCount() {
    const { count } = this.state;
    if (count > 1) {
      const { minusPrice, product } = this.props;
      const { price } = product;
      this.setState((oldState) => ({
        count: oldState.count - 1,
      }));
      minusPrice(price);
    }
  }

  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    const { count } = this.state;
    return (
      <div className="cart-product-item">
        <img src={ thumbnail } alt={ title } />
        <h6 data-testid="shopping-cart-product-name">{ title }</h6>
        <button
          data-testid="product-decrease-quantity"
          className="item-button"
          type="button"
          onClick={ this.minusCount }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ count }</p>
        <button
          data-testid="product-increase-quantity"
          className="item-button"
          type="button"
          onClick={ this.plusCount }
        >
          +
        </button>
        <p>{ `R$ ${price * count}`}</p>
      </div>
    );
  }
}

CartProductItem.propTypes = {
  product: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  plusPrice: PropTypes.func.isRequired,
  minusPrice: PropTypes.func.isRequired,
};

export default CartProductItem;
