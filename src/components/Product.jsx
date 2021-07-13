import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { title, thumbnail, price, id, productId, onClick, name } = this.props;
    return (
      <div data-testid="product" className="product">
        <h4>{ title }</h4>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}/${productId}` }
        >
          <img src={ thumbnail } alt={ title } />
        </Link>
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <button name={ name } data-testid="product-add-to-cart" type="button" onClick={ onClick }>
          Adicionar ao Carrinho
        </button>
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
