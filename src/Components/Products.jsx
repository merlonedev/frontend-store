import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  freeShipping = () => {
    const { product } = this.props;
    const { shipping } = product;
    if (shipping.free_shipping === true) {
      return (<p data-testid="free-shipping">Frete Grátis</p>);
    }
    console.log(shipping.free_shipping);
  }

  render() {
    const { title, img, price, id, addCart, product } = this.props;
    return (
      <div data-testid="product" className="card">
        {this.freeShipping()}
        <p>{ title }</p>
        <img src={ img } width="50px" alt="produto" className="photo" />
        <p>{ price }</p>
        <Link
          to={ `/product-detail/${id}` }
          data-testid="product-detail-link"
          className="link"
          addCart={ addCart }
          product={ product }
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default Products;
