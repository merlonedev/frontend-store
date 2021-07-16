import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutButton from './CheckoutButton';

export default class CartSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      btnclass: 'fa-shopping-cart',
    };
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility() {
    const { visible } = this.state;
    this.setState({ visible: !visible });
    if (!visible) { this.setState({ btnclass: 'fa-times' }); }
    if (visible) { this.setState({ btnclass: 'fa-shopping-cart' }); }
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
    const { handlers } = this.props;
    handlers.remove(itemToRemove);
  }

  render() {
    const { cartItems } = this.props;
    const { visible, btnclass } = this.state;
    return (
      <div className={ `slider visible-slider-${visible}` }>
        <button
          type="button"
          className={ `slider-btn visible-button-${visible}` }
          onClick={ this.handleVisibility }
        >
          <i className={ `fas ${btnclass}` } />
        </button>
        <h3>Carrinho</h3>
        {!cartItems.length
          ? (
            <div>
              <h4>Seu carrinho está vazio</h4>
              <p>Que tal adicionar alguns itens do catálogo? :)</p>
              <i className="fas fa-box-open empty-cart-icon" />
            </div>
          )

          : (
            <div className="slider-items">
              {cartItems.map((item) => (
                <div key={ item.id } className="row slider-item">
                  <h4 className="slider-item-title">{item.title}</h4>
                  <div id={ item.id } className="cart-btns-container">
                    <button
                      type="button"
                      onClick={ this.increaseQty }
                      className="button add-button"
                    >
                      <i
                        className="fas fa-plus"
                        data-testid="product-increase-quantity"
                      />
                    </button>
                    <p
                      data-testid="shopping-cart-product-quantity"
                      className="product-qty"
                    >
                      {item.qty}
                    </p>
                    <button
                      type="button"
                      onClick={ this.decreaseQty }
                      className="button add-button"
                    >
                      <i
                        className="fas fa-minus"
                        data-testid="product-decrease-quantity"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={ this.removeItem }
                      className="button remove-btn"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        {cartItems.length ? <CheckoutButton /> : null}
      </div>
    );
  }
}

CartSlider.propTypes = {
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
};
