import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCartButton from './subcomponents/AddToCartButton';

export default class ProductsList extends Component {
  constructor() {
    super();
    this.addedToCart = this.addedToCart.bind(this);
  }

  addedToCart(productId) {
    const { cart } = this.props;
    if (cart.some(({ id }) => id === productId)) return 'product-card added';
    return 'product-card';
  }

  render() {
    const { products, callback } = this.props;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return (
      <div className="product-list">
        {products.map((product) => (
          <div
            key={ product.id }
            data-testid="product"
            className={ this.addedToCart(product.id) }
          >
            {/* <div> */}
            <img
              alt="Product Cover"
              src={ product.thumbnail }
              className="product-cover"
            />
            <div className="price-shipping">
              <h2>
                { formatter.format(product.price) }
              </h2>
              { product.shipping.free_shipping ? (
                <p data-testid="free-shipping" className="shipping">
                  <strong className="green"> Frete Gratis! </strong>
                </p>
              ) : (
                <p data-testid="shipping" className="shipping">
                  Frete
                  <strong className="red"> NÃO </strong>
                  incluso.
                </p>
              )}
            </div>
            <p>{ product.title }</p>
            <Link
              data-testid="product-detail-link"
              to={ `/productdetails/${product.id}` }
            >
              Detalhes
            </Link>
            {/* <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => callback({ ...product, qty: 1 }) }
              className="add-button button"
            >
              <i className="fas fa-cart-arrow-down"> Adicionar ao Carrinho</i>
            </button> */}
            <AddToCartButton
              onClick={ () => callback({ ...product, qty: 1 }) }
              datatestid="product-add-to-cart"
            />
          </div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
  callback: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
