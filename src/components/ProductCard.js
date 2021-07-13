import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price, id, onClick } = this.props;

    return (
      <li data-testid="product">
        <Link
          to={ `/product/${id}/${title}` }
          data-testid="product-detail-link"
        >
          <h2>{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$ ${price}` }</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ onClick }
        >
          Adicionar ao Carrinho
        </button>
      </li>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
