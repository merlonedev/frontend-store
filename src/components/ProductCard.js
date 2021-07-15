/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';
import ProductDetails from './ProductDetails';

class ProductCard extends Component {
  render() {
    const { product, searchText, callBack } = this.props;
    const { category_id, id, title, thumbnail, price } = product;
    return (
      <>
        <button
          type="button"
          data-testid="product-detail-link"
          onClick={ () => {
            callBack(id);
          } }
        >
          <div data-testid="product">
            <h3>{title}</h3>
            <h4>{price}</h4>
            <img src={ thumbnail } alt={ title } />
          </div>
        </button>
      </>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
  }).isRequired,
  searchText: PropTypes.string.isRequired,
};

export default ProductCard;
