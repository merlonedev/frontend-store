import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { title, img, price, id, addCart, product } = this.props;
    return (
      <div data-testid="product" className="card">
        <p>{ title }</p>
        <img src={ img } width="50px" alt="produto" className="photo" />
        <p>{ price }</p>
        <Link
          to={ `/product-detail/${id}` }
          data-testid="product-detail-link"
          className="link"
        >
          Ver Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addCart(product) }
        >
          Adicionar Carrinho
        </button>
      </div>
    );
  }
}

Products.defaultProps = {
  img: undefined,
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  addCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    price: PropTypes.number.isRequired,
    categoryId: PropTypes.string,
  }).isRequired,
};

export default Products;
