import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="product-list">
        { products.map((prdct) => <ProductCard key={ prdct.id } product={ prdct } />) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default ProductList;
