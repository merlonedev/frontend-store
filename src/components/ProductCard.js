import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price, onClick } = this.props;

    return (
      <li data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}` }</p>
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
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
