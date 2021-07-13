import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { title, thumbnail, price, id, productId } = this.props;
    return (
      <div data-testid="product" className="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}/${productId}` }
        >
          Detalhes do Produto
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};

export default Product;
