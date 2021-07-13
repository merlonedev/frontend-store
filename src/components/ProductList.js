import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    let allElements = [];
    return products.map(({ id, title, thumbnail, price }) => {
      const cartElements = { id, title, price };
      return (<ProductCard
        id={ id }
        key={ id }
        title={ title }
        thumbnail={ thumbnail }
        price={ price }
        onClick={ (
          () => {
            allElements = [...allElements, cartElements];
            return sessionStorage.setItem('addCart', JSON.stringify(allElements));
          }
        ) }
      />);
    });
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
