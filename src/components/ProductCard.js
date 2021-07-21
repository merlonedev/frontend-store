import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { title, thumbnail, price, id, shipping } = product;
    const CORRECT_SIZE = -5;

    let formatPrice = String(parseFloat((price * 100) / 100).toFixed(2));
    formatPrice = formatPrice.replace(/\./g, ',');

    return (
      <div className="product-container" data-testid="product">
        <div className="product-title-container">
          <Link
            className="product-link"
            data-testid="product-detail-link"
            to={ { pathname: `/product/${id}`, state: { product } } }
          >
            <h3 className="product-title">{ title }</h3>
          </Link>
        </div>
        <div className="product-description-container">
          { (shipping.free_shipping ? (
            <div className="free-shipping" data-testid="free-shipping">
              <span className="free-shipping-title"> Entrega Grátis </span>
              <span className="material-icons delivery"> local_shipping </span>
            </div>
          ) : (
            <> </>
          )) }
          <Link
            className="product-link"
            data-testid="product-detail-link"
            to={ { pathname: `/product/${id}`, state: { product } } }
          >
            <img
              src={ `${thumbnail.slice(0, CORRECT_SIZE)}O.jpg` }
              className="product-image"
              alt="Imagem do Produto"
            />
          </Link>
          <Link
            className="product-link"
            data-testid="product-detail-link"
            to={ { pathname: `/product/${id}`, state: { product } } }
          >
            <span className="product-price">
              { `R$ ${formatPrice}` }
            </span>
          </Link>
          <button
            type="button"
            className="material-icons add-cart"
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(product) }
          >
            add_shopping_cart
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  // cartHandleCounter: PropTypes.func.isRequired,
};

export default ProductCard;
