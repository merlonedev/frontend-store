import React from 'react';

export default class CheckoutPayment extends React.Component {
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
