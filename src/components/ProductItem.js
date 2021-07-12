import React from 'react';
import PropTypes from 'prop-types';

class ProductItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div
        className={ `productItem ${product.id}` }
        data-testid="product"
      >
        <h3>{ `Título: ${product.title}` }</h3>
        <img
          className="thumbnail"
          src={ product.thumbnail }
          alt={ product.title }
        />
        <p>{ product.price }</p>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductItem;
