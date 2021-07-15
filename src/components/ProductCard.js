import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  addItemToCart(product) {
    if (localStorage.getItem('carrinho')) {
      const currentCart = JSON.parse(localStorage.getItem('carrinho'));
      const futureCart = [...currentCart, product];
      localStorage.setItem('carrinho', JSON.stringify(futureCart));
    } else {
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
