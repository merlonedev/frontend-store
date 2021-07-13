import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h1>{ product.title}</h1>
        <img src={ product.thumbnail } alt={ product.id } />
        <p>
          R$
          {product.price}
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(String),
};

ProductCard.defaultProps = {
  product: undefined,
};
export default ProductCard;
