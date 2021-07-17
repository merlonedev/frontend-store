import React from 'react';
import PropTypes from 'prop-types';

class CartProductCard extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: false,
    };

    this.checkStorage = this.checkStorage.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { cartProducts } = this.props;
    const { product: { available_quantity: maxStorage } } = prevProps;
    if (cartProducts.length >= maxStorage) {
      this.checkStorage();
    }
  }

  checkStorage() {
    const { disabled } = this.state;
    if (!disabled) {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { product, amount, addToCart, rmvFromCart } = this.props;
    const { title, thumbnail_id: id, price } = product;
    const { disabled } = this.state;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${id}-W.webp` } alt="Imagem do Produto" />
        <p>{ price }</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => rmvFromCart(product) }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => addToCart(product) }
          disabled={ disabled }
        >
          +
        </button>
        <button
          type="button"
        >
          X
        </button>
      </div>
    );
  }
}

CartProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail_id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  rmvFromCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartProductCard;
