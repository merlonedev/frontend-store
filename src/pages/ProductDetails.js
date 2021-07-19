import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../Components/ButtonCart';

class ProductDetails extends Component {
  render() {
    const { location: {
      state: { title, thumbnail, price } } } = this.props;
    const { match: { params: { id } } } = this.props;
    const { addToShoppingCart } = this.props;
    return (
      <section data-testid="product-datail-container">
        <Link to="/">Home</Link>
        <ButtonCart />

        <div data-testid="product-detail-container-title">
          <h3 data-testid="product-detail-name">{ title }</h3>
        </div>
        <div data-testid="product-detail-container-img">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div data-testid="product-detail-container-description">
          <p>Descrição</p>
          <p>{ price }</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            id={ id }
            onClick={ addToShoppingCart }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
      categoryId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
};

export default ProductDetails;
