import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(({ title, thumbnail, price, id }) => (
          <div
            data-testid="product"
            key={ id }
          >
            <h1>{ title }</h1>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.string,
}.isRequired;

export default ProductList;
