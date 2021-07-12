import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
