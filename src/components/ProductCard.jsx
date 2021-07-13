import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
