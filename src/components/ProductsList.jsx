import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {
  render() {
    const { products, callback } = this.props;
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
                R$
                { product.price }
              </h2>
              { product.shipping.free_shipping ? (
                <p data-testid="free-shipping" className="shipping">
                  <strong> Frete Gratis! </strong>
                </p>
              ) : (
                <p data-testid="shipping" className="shipping">
                  Frete
                  <strong> NÃO </strong>
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
              onClick={ () => callback({ ...product, qty: 1 }) }
            >
              <p>Adicionar ao Carrinho</p>
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
