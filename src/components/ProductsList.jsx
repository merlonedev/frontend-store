import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(({ title, id, thumbnail, price }) => (
          <div key={ id } data-testid="product">
            <img alt="Product Cover" src={ thumbnail } />
            <div>
              <h4>{title}</h4>
              <p>{ price }</p>
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
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
