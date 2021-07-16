import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CartItem.css';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    this.state = {
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
      quantity: item.quantity,
      availableQuantity: item.available_quantity,
      disableIncreaseButton: false,
      newPrice: item.price,
    };

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.updateItemPrice = this.updateItemPrice.bind(this);
  }

  increaseQuantity() {
    const { quantity, availableQuantity } = this.state;
    if (quantity === availableQuantity) {
      this.setState({
        disableIncreaseButton: true,
      });
    } else {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }), () => this.updateItemPrice());
    }
  }

  decreaseQuantity() {
    const { id, quantity } = this.state;
    const { deleteItem } = this.props;
    if (quantity === 1) deleteItem(id);
    else if (quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }), () => this.updateItemPrice());
    }
  }

  updateItemPrice() {
    const { price, quantity } = this.state;
    this.setState({
      newPrice: price * quantity,
    });
  }

  render() {
    const { deleteItem } = this.props;
    const { id, thumbnail, newPrice, title, quantity,
      disableIncreaseButton } = this.state;
    return (
      <div className="cart-item-container">
        <button
          className="delete-button"
          type="button"
          onClick={ () => deleteItem(id) }
        >
          X
        </button>
        <img src={ thumbnail } alt={ title } width="100px" />
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <button
          data-testid="product-decrease-quantity"
          className="minus-button"
          type="button"
          onClick={ this.decreaseQuantity }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <button
          data-testid="product-increase-quantity"
          className="plus-button"
          type="button"
          onClick={ this.increaseQuantity }
          disabled={ disableIncreaseButton }
        >
          +
        </button>
        <span>{ `R$ ${newPrice}` }</span>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default CartItem;
