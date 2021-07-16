import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveCart, getCartItems } from '../services/localStorage';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.addProductToCart = this.addProductToCart.bind(this);
    this.checkItemQuantity = this.checkItemQuantity.bind(this);
  }

  checkItemQuantity(item) {
    if (item && item.quantity === item.available_quantity) {
      item.disableAddItemButton = true;
    }
  }

  addProductToCart(item) {
    const { handleCartQuantity } = this.props;
    handleCartQuantity();

    const { id } = item;
    const cartItems = getCartItems();

    const hasItem = cartItems.some((cartItem) => cartItem.id === id);

    if (hasItem) {
      const updateProduct = cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.quantity += 1;
          return cartItem;
        }
        return cartItem;
      });
      localStorage.setItem('cart', JSON.stringify([...updateProduct]));
    } else {
      const productQuantity = { quantity: 1, disableAddItemButton: false };
      const finalProduct = Object.assign(productQuantity, item);
      this.checkItemQuantity(finalProduct);
      saveCart(finalProduct);
    }
  }

  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <div
        className={ `productItem ${id}` }
        data-testid="product"
      >
        <h3>{ `${title}` }</h3>
        <img
          className="thumbnail"
          src={ thumbnail }
          alt={ title }
        />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/product-details/${id}`, state: product } }
        >
          Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addProductToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleCartQuantity: PropTypes.func.isRequired,
};

export default ProductItem;
