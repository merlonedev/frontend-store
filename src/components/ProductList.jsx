import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    const { products, handleCartQuantity } = this.props;
    const { results } = products;
    return (
      <div className="productList">
        { results
          .map((product) => (
            <ProductItem
              key={ product.id }
              product={ product }
              handleCartQuantity={ handleCartQuantity }
            />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  handleCartQuantity: PropTypes.func.isRequired,
};

export default ProductList;
