import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, updateCartSize } = this.props;
    let allElements = [];
    if (sessionStorage.getItem('addCart')) {
      allElements = JSON.parse(sessionStorage.getItem('addCart'));
    }
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
            sessionStorage.setItem('addCart', JSON.stringify(allElements));
            updateCartSize();
          }
        ) }
      />);
    });
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCartSize: PropTypes.func.isRequired,
};

export default ProductList;
