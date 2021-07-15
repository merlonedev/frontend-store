import React from 'react';
import HomeButton from '../components/Home/HomeButton';
import FormCheckout from '../components/Form/FormCheckout';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <HomeButton />
        <p>Hello World!!!</p>
        <FormCheckout />
      </div>
    );
  }
}

export default Checkout;
