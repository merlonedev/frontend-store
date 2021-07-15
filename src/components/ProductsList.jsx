import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {
  constructor() {
    super();
    this.addedToCart = this.addedToCart.bind(this);
  }

  addedToCart({ target }, product) {
    const { callback } = this.props;
    const productCard = target.parentElement;
    productCard.classList.add('added');
    callback(product);
  }

  render() {
    const { products } = this.props;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={ product.id } data-testid="product" className="product-card">
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
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ (event) => this.addedToCart(event, { ...product, qty: 1 }) }
              className="add-button button"
            >
              <i className="fas fa-cart-arrow-down"> Adicionar ao Carrinho</i>
            </button>
            {/* </div> */}
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
};
