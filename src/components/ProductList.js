import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    return products.map(({ id, title, thumbnail, price }) => (
      <ProductCard
        id={ id }
        key={ id }
        title={ title }
        thumbnail={ thumbnail }
        price={ price }
      />));
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
