import React from 'react';
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import '../css/productInCart.css';
import PropTypes from 'prop-types';

class ProductInCart extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product" className="product">
        <AiFillCloseCircle className="remove-item-cart" />
        <img
          src={ thumbnail.replace('I.jpg', 'O.jpg') }
          alt={ title }
          className="image-item"
        />
        <p className="item-cart-name" data-testid="shopping-cart-product-name">{title}</p>
        <AiFillMinusCircle className="minus-item" />
        <div className="item-price-content">
          <span data-testid="shopping-cart-product-quantity">1</span>
        </div>
        <AiFillPlusCircle className="plus-item" />
        <p>{price}</p>
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
