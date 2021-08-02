import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import formData from '../formData';
import CartCard from '../components/CartCard';

class Checkout extends React.Component {
  constructor() {
    super();
    this.formHandler = this.formHandler.bind(this);
    this.state = { ...formData, cartItems: [], totalPrice: 0 };
  }

  componentDidMount() {
    this.getCart();
  }

  getCart = () => {
    const cart = JSON.parse(localStorage.getItem('Cart'));
    this.setState({
      cartItems: [...cart],
    }, () => this.getTotal());
  }

  getTotal = () => {
    const { cartItems } = this.state;
    let total = 0;
    cartItems.forEach((e) => {
      total += e.soma;
    });
    this.setState({
      totalPrice: total,
    });
  }

  formHandler({ target: { name, value } }) {
    this.setState((state) => ({
      [name]: { ...state[name], value },
    }));
  }

  render() {
    const { clientName,
      clientEmail, clientCpf, clientCel,
      clientPostal, clientAdress, cartItems, totalPrice } = this.state;

    return (
      <section>
        {cartItems.map((item) => (<CartCard
          getTotalPrice={ this.getTotalPrice }
          key={ item.id }
          product={ item }
        />))}
        <CheckoutForm
          clientName={ clientName }
          clientEmail={ clientEmail }
          clientCpf={ clientCpf }
          clientCel={ clientCel }
          clientPostal={ clientPostal }
          clientAdress={ clientAdress }
          formHandler={ this.formHandler }
        />
        <h1>{ totalPrice }</h1>
      </section>
    );
  }
}

export default Checkout;
