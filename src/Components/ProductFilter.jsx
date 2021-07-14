import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

class ProductFilter extends Component {
  render() {
    const { products, addCart } = this.props;
    return (
      <div className="cardDiv">
        { products.map((product) => (
          <Products
            key={ product.id }
            title={ product.title }
            img={ product.thumbnail }
            price={ product.price }
            id={ product.id }
            categoryId={ product.categoryId }
            addCart={ addCart }
            product={ product }
          />
        ))}
      </div>
    );
  }
}

ProductFilter.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ProductFilter;
