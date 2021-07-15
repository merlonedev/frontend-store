import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  addItemToCart(product) {
    if (localStorage.getItem('carrinho')) {
      const currentCart = JSON.parse(localStorage.getItem('carrinho'));
      let futureCart = [];
      const alreadyInCart = currentCart.some((item) => product.id === item.id);
      if (alreadyInCart) {
        currentCart.map((item) => {
          if (item.id === product.id) {
            item.quantity += 1;
            return item;
          }
          return item;
        });
        futureCart = [...currentCart];
      } else {
        product.quantity = 1;
        futureCart = [...currentCart, product];
      }
      localStorage.setItem('carrinho', JSON.stringify(futureCart));
    } else {
      product.quantity = 1;
      const cart = [product];
      localStorage.setItem('carrinho', JSON.stringify(cart));
    }
  }

  render() {
    const {
      product,
      product: {
        id,
        title,
        thumbnail,
        price,
      },
    } = this.props;

    return (
      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            state: product,
          } }
        >
          <h2>{title}</h2>
          <img src={ thumbnail } alt="Product Thumbnail" />
          <p>
            {`Preço R$ ${price}`}
          </p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addItemToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = ({
  description: PropTypes.string,
  prodImg: PropTypes.string,
  price: PropTypes.number,
  shipping: PropTypes.string,
}).isRequired;
