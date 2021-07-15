import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, setShoppingCart } = this.props;
    return (
      <div className="product-list">
        { products.map((prdct) => (
          <ProductCard
            key={ prdct.id }
            product={ prdct }
            setShoppingCart={ setShoppingCart }
          />)) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf({}).isRequired,
  setShoppingCart: PropTypes.func.isRequired,
};

export default ProductList;
