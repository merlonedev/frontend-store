import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonToCard from './ButtonToCard';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product, cartProducts, handleShoppingCart } = this.props;
    if (cartProducts.length === 0) {
      handleShoppingCart(cartProducts, product);
      return;
    }
    handleShoppingCart(cartProducts, product);
  }

  render() {
    const { product } = this.props;
    const {
      title,
      thumbnail,
      price,
      id,
      shipping: { free_shipping: freeShipping } } = product;

    return (
      <section data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        {freeShipping ? <h4 data-testid="free-shipping">Frete Grátis</h4> : ''}
        <p>
          Preço: R$
          { price }
        </p>
        <ButtonToCard addToCart={ this.addToCart } />
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            data: title,
            state: product,
          } }
        >
          Detalhes do Produto
        </Link>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  handleShoppingCart: PropTypes.func.isRequired,
};

export default ProductCard;
