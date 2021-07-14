import React from 'react';
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import '../css/productInCart.css';
import PropTypes from 'prop-types';

class ProductInCart extends React.Component {
  constructor({ product: { price } }) {
    super();
    this.state = {
      price: Number(price),
      totalPrice: 0,
      count: 1,
    };
    this.totalPriceCalculator = this.totalPriceCalculator.bind(this);
    this.plusItemCount = this.plusItemCount.bind(this);
    this.minusItemCount = this.minusItemCount.bind(this);

    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.totalPriceCalculator();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  totalPriceCalculator() {
    const { price, count } = this.state;
    if (this.mounted) {
      this.setState({
        totalPrice: (price * count).toLocaleString('pt-BR', {
          minimumFractionDigits: 2, style: 'currency', currency: 'BRL',
        }),
      });
    }
  }

  plusItemCount() {
    this.setState((state) => ({
      count: state.count + 1,
    }), () => this.totalPriceCalculator());
  }

  minusItemCount() {
    this.setState((state) => ({
      count: state.count > 0 ? (state.count - 1) : 0,
    }), () => this.totalPriceCalculator());
  }

  render() {
    const { product: { title, thumbnail } } = this.props;
    const { totalPrice, count } = this.state;
    return (
      <div data-testid="product" className="product">
        <AiFillCloseCircle className="remove-item-cart" />
        <img
          src={ thumbnail.replace('I.jpg', 'O.jpg') }
          alt={ title }
          className="image-item"
        />
        <p className="item-cart-name" data-testid="shopping-cart-product-name">{title}</p>
        <AiFillMinusCircle
          onClick={ this.minusItemCount }
          data-testid="product-decrease-quantity"
          className="minus-item"
        />
        <div className="item-count-content">
          <span data-testid="shopping-cart-product-quantity">{ count }</span>
        </div>
        <AiFillPlusCircle
          onClick={ this.plusItemCount }
          data-testid="product-increase-quantity"
          className="plus-item"
        />
        <span className="item-price">{ totalPrice }</span>
      </div>
    );
  }
}

ProductInCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductInCart;
