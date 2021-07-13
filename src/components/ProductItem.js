import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div
        className={ `productItem ${product.id}` }
        data-testid="product"
      >
        <h3>{ `${product.title}` }</h3>
        <img
          className="thumbnail"
          src={ product.thumbnail }
          alt={ product.title }
        />
        <p>{ product.price }</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/product-details/${product.id}`, state: product } }
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
  // getProductDetails: PropTypes.func.isRequired,
};

export default ProductItem;
