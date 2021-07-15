import React from 'react';
import HomeButton from '../components/Home/HomeButton';
import CardCheckout from './CardCheckout';
import PaymentMethods from './PaymentMethods';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <HomeButton />
        <p>Hello World!!!</p>
        <CardCheckout />
        <PaymentMethods />
      </div>
    );
  }
}

export default Checkout;
