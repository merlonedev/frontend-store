import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    const { products, handleCart, cart, shouldUpdateCart } = this.props;
    return (
      <div className="productList">
        { products.results
          .map((product) => (
            <ProductItem
              key={ product.id }
              cart={ cart }
              product={ product }
              handleCart={ handleCart }
              shouldUpdateCart={ shouldUpdateCart }
            />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  handleCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.string).isRequired,
  shouldUpdateCart: PropTypes.func.isRequired,
};

export default ProductList;
