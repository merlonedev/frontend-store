import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (

      <div>
        {products.map((result) => (
          <div
            key={ result.title }
          >
            <h1>{ result.title }</h1>
            <img src={ result.thumbnail } alt={ result.title } />
            <p>{ result.price }</p>
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
