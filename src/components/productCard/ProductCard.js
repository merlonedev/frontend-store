import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, detailsHandler } = this.props;
    return (
      <div data-testid="product">
        <h1>{ product.title}</h1>
        <Link
          to="/details"
          onClick={ () => detailsHandler(product) }
          data-testid="product-detail-link"
        >
          <img
            src={ product.thumbnail }
            alt={ product.id }
          />
        </Link>
        <Link to="/shopping-cart">Carrinho</Link>

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
  detailsHandler: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
  product: undefined,
};

export default ProductCard;
