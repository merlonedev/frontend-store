import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { fullname, email, cpf, phone, cep, address, handlerChange } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          name="fullname"
          value={ fullname }
          maxLength="40"
          onChange={ handlerChange }
          isRequired
        />

        <input
          type="email"
          data-testid="checkout-email"
          placeholder="email"
          name="email"
          value={ email }
          maxLength="40"
          onChange={ handlerChange }
          isRequired
        />

        <input
          type="text"
          data-testid="checkout-cpf"
          placeholder="CPF"
          name="cpf"
          value={ cpf }
          maxLength="10"
          onChange={ handlerChange }
          isRequired
        />

        <input
          type="number"
          data-testid="checkout-phone"
          placeholder="phone"
          name="phone"
          value={ phone }
          onChange={ handlerChange }
          isRequired
        />

        <input
          type="number"
          data-testid="checkout-cep"
          placeholder="cep"
          name="cep"
          value={ cep }
          onChange={ handlerChange }
          isRequired
        />

        <input
          type="text"
          data-testid="checkout-address"
          placeholder="address"
          name="address"
          value={ address }
          onChange={ handlerChange }
          isRequired
        />
      </div>
    );
  }
}

Input.propTypes = {
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  cep: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default Input;
