import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {
  render() {
    const { products, callback } = this.props;
    return (
      <div>
        {products.map(({ title, id, thumbnail, price }) => (
          <div key={ id } data-testid="product">
            <img alt="Product Cover" src={ thumbnail } />
            <div>
              <h4>{title}</h4>
              <p>{price}</p>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => callback({ title, id, thumbnail, price, qty: 1 }) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
            <Link
              data-testid="product-detail-link"
              to={ `/productdetails/${id}` }
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
};
