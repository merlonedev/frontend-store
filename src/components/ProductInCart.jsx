import React from 'react';
import PropTypes from 'prop-types';

class ProductInCart extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    console.log(title, thumbnail, price);
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail.replace('I.jpg', 'O.jpg') } alt={ title } />
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
