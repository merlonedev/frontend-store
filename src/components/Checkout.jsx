import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Form1 from './Form1';
import Form2 from './Form2';
import CartItems from './CartItems';
import ReturnButton from './subcomponents/ReturnButton';
import TotalCart from './subcomponents/TotalCart';
import CompletePurchaseButton from './subcomponents/CompletePurchaseButton';
import Header from './Header';

// prettier-ignore
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      willReturn: false,
    };
    this.checkEmpty = this.checkEmpty.bind(this);
    this.redirecting = this.redirecting.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.checkEmpty();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  checkEmpty() {
    const { cartItems } = this.props;
    if (cartItems.length) this.setState({ empty: false });
  }

  redirecting() {
    const timeout = 3500;
    setTimeout(() => {
      if (this.mounted) {
        this.setState({ willReturn: true });
      }
    }, timeout);
  }

  render() {
    const { cartItems, handlers } = this.props;
    const { empty, willReturn } = this.state;

    if (empty) {
      this.redirecting();
      return (
        <div>
          <h3>Carrinho Vazio</h3>
          <p>Que tal escolher alguns produtos pra fazer umas comprinhas?</p>
          <p>Já estamos te levando de volta ao catálogo!</p>
          { willReturn && <Redirect to="/" /> }
        </div>
      );
    }

    return (
      <div className="checkout">
        <Header title="Checkout" />
        <div className="cart-items-checkout">
          <CartItems cartItems={ cartItems } handlers={ handlers } showButtons="false" />
        </div>
        <div className="forms">
          <Form1 />
          <Form2 />
          <TotalCart cartItems={ cartItems } />
          <div className="cart-btns-container">
            <CompletePurchaseButton handlers={ handlers } />
            <ReturnButton path="/cart" />
          </div>
        </div>
      </div>
    );
  }
}

// prettier-ignore
Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
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
