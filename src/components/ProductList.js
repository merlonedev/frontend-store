import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="product-list">
        {products.map(({ title, thumbnail, price, id }) => (
          <div
            data-testid="product"
            key={ id }
            className="product-container"
          >
            <h1 className="title-product">{ title }</h1>
            <img src={ thumbnail } alt={ title } className="image-product" />
            <p className="price-product">{ price }</p>
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
