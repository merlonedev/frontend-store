import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import SubtractButton from './SubtractButton';
import RemoveButton from './RemoveButton';

class CartItems extends Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  increaseQuantity(product) {
    const { cartProducts, handleShoppingCart } = this.props;
    handleShoppingCart(cartProducts, product);
  }

  decreaseQuantity(product) {
    const { cartProducts, handleShoppingCart } = this.props;
    const MINUS_ONE = -1;
    handleShoppingCart(cartProducts, product, MINUS_ONE);
  }

  removeItem(id) {
    const { cartProducts, handleShoppingCart } = this.props;
    const newProductList = cartProducts.filter((product) => id !== product.id);
    handleShoppingCart(newProductList);
  }

  render() {
    const { cartProducts } = this.props;
    return (
      <ul>
        {
          cartProducts.map((product) => {
            const {
              price,
              title,
              thumbnail,
              id,
              available_quantity: availableQuantity,
              qtdInCart } = product;
            return (
              <li key={ id }>
                <RemoveButton
                  id={ id }
                  removeItem={ this.removeItem }
                />
                <img src={ thumbnail } alt={ title } />
                <p data-testid="shopping-cart-product-name">{ title }</p>
                <SubtractButton
                  product={ product }
                  decreaseQuantity={ this.decreaseQuantity }
                />
                <div data-testid="shopping-cart-product-quantity">{ qtdInCart }</div>
                <AddButton
                  product={ product }
                  qtdInCart={ qtdInCart }
                  availableQuantity={ availableQuantity }
                  increaseQuantity={ this.increaseQuantity }
                />
                <p>
                  { `R$${(price * qtdInCart).toFixed(2)}` }
                </p>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

CartItems.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  handleShoppingCart: PropTypes.func.isRequired,
};

export default CartItems;
