import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutPayment extends Component {
  render() {
    const { checkbox, handleChange } = this.props;
    return (
      <div>
        Formas de Pagamento
        <label htmlFor="payment">
          <input
            type="radio"
            name="checkbox"
            onClick={ handleChange }
            value={ checkbox }
          />
          Boleto
        </label>
        <label htmlFor="payment">
          <input
            type="radio"
            name="checkbox"
            onChange={ handleChange }
            value={ checkbox }
          />
          Visa
        </label>
        <label htmlFor="payment">
          <input
            type="radio"
            name="checkbox"
            onChange={ handleChange }
            value={ checkbox }
          />
          MasterCard
        </label>
        <label htmlFor="payment">
          <input
            type="radio"
            name="checkbox"
            onChange={ handleChange }
            value={ checkbox }
          />
          Elo
        </label>
      </div>
    );
  }
}

CheckoutPayment.propTypes = {
  checkbox: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckoutPayment;
