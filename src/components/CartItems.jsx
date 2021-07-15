import React, { Component } from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
export default class CartItems extends Component {
  constructor(props) {
    super(props);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  increaseQty({ target }) {
    const itemToIncrease = target.parentElement.parentElement.id;
    const { handlers } = this.props;
    handlers.increase(itemToIncrease);
  }

  decreaseQty({ target }) {
    const itemToRemove = target.parentElement.parentElement.id;
    const { handlers } = this.props;
    handlers.decrease(itemToRemove);
  }

  removeItem({ target }) {
    const itemToRemove = target.parentElement.parentElement.id;
    // const qtyToRemove = Number(target.parentElement.className);
    const { handlers } = this.props;
    handlers.remove(itemToRemove);
  }

  renderButtons(id, qty) {
    return (
      <div id={ id } className="cart-btns-container">
        <button
          type="button"
          onClick={ this.decreaseQty }
          className="button add-button"
        >
          <i className="fas fa-minus" data-testid="product-decrease-quantity" />
        </button>
        <p data-testid="shopping-cart-product-quantity" className="product-qty">{qty}</p>
        <button
          type="button"
          onClick={ this.increaseQty }
          className="button add-button"
        >
          <i className="fas fa-plus" data-testid="product-increase-quantity" />
        </button>
        <button
          type="button"
          onClick={ this.removeItem }
          className="button remove-btn"
        >
          <i className="fas fa-times" />
        </button>
        {/* <button type="button">Finalizar Compra</button> */}
      </div>
    );
  }

  render() {
    const { cartItems: items, showButtons } = this.props;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return items.map((item) => (
      <div key={ item.id } className="cart-item">
        <img src={ item.thumbnail } alt="Imagem do Produto" className="product-cover" />
        <div className="btn-name-container">
          <h4 data-testid="shopping-cart-product-name">{item.title}</h4>
          <p>Quantidade:</p>
          { showButtons === 'true' ? this.renderButtons(item.id, item.qty) : null }
        </div>
        <p>Total:</p>
        <h4 className="product-price">
          {formatter.format(item.price * item.qty)}
        </h4>
        {/* <p data-testid="shopping-cart-product-quantity">{item.qty}</p> */}
      </div>
    ));
  }
}

// prettier-ignore
CartItems.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      forEach: PropTypes.func,
      length: PropTypes.number,
    }),
  ).isRequired,
  handlers: PropTypes.shape({
    remove: PropTypes.func,
    increase: PropTypes.func,
    decrease: PropTypes.func,
  }).isRequired,
  showButtons: PropTypes.string.isRequired,
};
