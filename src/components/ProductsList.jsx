import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {

  render() {
    const { products, callback } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div key={ product.id } data-testid="product">
            <img alt="Product Cover" src={ product.thumbnail } />
            <div>
              <h4>{ product.title }</h4>
              <p>{ product.price }</p>
              { product.shipping.free_shipping ? (
                <p data-testid="free-shipping">
                  <strong> Frete Gratis! </strong>
                </p>
              ) : (
                <p data-testid="shipping">
                  Frete
                  <strong> NÂO </strong>
                  incluso.
                </p>
              )}
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => callback({ ...product, qty: 1 }) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
            <Link
              data-testid="product-detail-link"
              to={ `/productdetails/${product.id}` }
            >
              Detalhes
            </Link>
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
  sorting: PropTypes.string.isRequired,
};
