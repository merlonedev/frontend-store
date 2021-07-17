import React from 'react';
import PropTypes from 'prop-types';
import CartList from '../components/CartList';
import FormCheckout from '../components/FormCheckout';

class Checkout extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    return (
      <section>
        A
        <CartList cart={ state } />
        <FormCheckout />
      </section>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Checkout;
