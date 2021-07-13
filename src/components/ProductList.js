import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    const { products, productDetails, getProductDetails } = this.props;
    return (
      <div className="productList">
        { products.results
          .map((product) => (
            <ProductItem
              key={ product.id }
              product={ product }
              productDetails={ productDetails }
              getProductDetails={ getProductDetails }
            />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  productDetails: PropTypes.arrayOf(Object).isRequired,
  getProductDetails: PropTypes.func.isRequired,
};

export default ProductList;
