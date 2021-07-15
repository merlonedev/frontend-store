/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

class ProductDetails extends Component {
  render() {
    const { product, callBack2 } = this.props;
    const { title } = product;
    return (
      <>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <div>
          <img alt={ product.title } src={ product.thumbnail } />
          <h3>Detalhes do Produto</h3>
          <ul>
            <li>{product.title}</li>
            <li>{product.price}</li>
          </ul>
        </div>
        <button type="button" onClick={ () => callBack2() }>VOLTAR</button>
        <Link to="/ShoppingCart">CARRINHO DE COMPRAS</Link>
        <div>
          <Form title={ title } />
        </div>
      </>
    );
  }
}

ProductDetails.propTypes = {
  callBack2: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
