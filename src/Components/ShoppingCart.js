import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import Checkout from './Checkout';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.changeCheckoutState = this.changeCheckoutState.bind(this);
    this.renderCheckout = this.renderCheckout.bind(this);
    this.state = {
      total: 0,
      checkout: false,
    };
  }

  componentDidMount() {
    this.sumPrice();
  }

  componentDidUpdate() {
    this.sumPrice();
  }

  sumPrice() {
    const { total } = this.state;
    const { cartList } = this.props;
    const sumTotal = cartList
      .map(({ price, quantity }) => price * quantity)
      .reduce((totalPrice, price) => totalPrice + price, 0);
    if (total !== sumTotal) this.setState({ total: sumTotal });
  }

  changeCheckoutState() {
    this.setState({ checkout: true });
  }

  renderCheckout() {
    const { checkout } = this.state;
    return checkout === true && <Checkout />;
  }

  render() {
    const { total } = this.state;
    const { cartList, removeItem, setQuantity } = this.props;
    if (cartList.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div>
        <div className="shopping-cart">
          <div className="cards-div">
            <p>{`Total: ${total.toFixed(2)}`}</p>
            {
              cartList.map((
                { id, price, quantity, thumbnail, title }, index,
              ) => (<CartItem
                key={ index }
                id={ id }
                price={ price }
                quantity={ quantity }
                thumbnail={ thumbnail }
                title={ title }
                removeItem={ removeItem }
                setQuantity={ setQuantity }
              />))
            }
          </div>
          <button
            type="button"
            data-testid="checkout-products"
            onClick={ this.changeCheckoutState }
          >
            Finalizar compra
          </button>
        </div>
        { this.renderCheckout() }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
};
