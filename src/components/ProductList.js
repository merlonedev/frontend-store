import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    // const { products, productDetails, getProductDetails } = this.props;
    const {
      products,
      productDetails,
      getProductDetails,
      handleCart,
      cart,
      shouldUpdateCart,
    } = this.props;
    return (
      <div className="productList">
        { products.results
          .map((product) => (
            <ProductItem
              key={ product.id }
              cart={ cart }
              product={ product }
              productDetails={ productDetails }
              getProductDetails={ getProductDetails }
              handleCart={ handleCart }
              shouldUpdateCart={ shouldUpdateCart }
            />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  productDetails: PropTypes.arrayOf(Object).isRequired,
  getProductDetails: PropTypes.func.isRequired,
  handleCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.string).isRequired,
  shouldUpdateCart: PropTypes.func.isRequired,
};

export default ProductList;
