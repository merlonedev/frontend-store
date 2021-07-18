import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { title, thumbnail, price, id, productId, addToCart, shipping } = this.props;
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
        {shipping && <h4 data-testid="free-shipping">Frete Grátis</h4>}
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ addToCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  productId: PropTypes.string,
  addToCart: PropTypes.func,
}.isRequired;

export default Product;
