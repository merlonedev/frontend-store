/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddToCartButton from './AddToCartButton';
import Form from './Form';

class ProductDetails extends Component {
  render() {
    const {
      product,
      goBackCallBack,
      renderShoppingCartCallBack,
      addToCartCallback,
    } = this.props;
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
        <AddToCartButton
          product={ product }
          addToCartCallback={ (prod) => addToCartCallback(prod) }
          dataTestId="product-detail-add-to-cart"
        />
        <button
          type="button"
          onClick={ () => goBackCallBack() }
        >
          VOLTAR
        </button>
        <button
          type="button"
          onClick={ () => renderShoppingCartCallBack() }
        >
          CARRINHO DE COMPRAS
        </button>
        <div>
          <Form title={ title } />
        </div>
      </>
    );
  }
}

ProductDetails.propTypes = {
  goBackCallBack: PropTypes.func.isRequired,
  renderShoppingCartCallBack: PropTypes.func.isRequired,
  addToCartCallback: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductDetails;
