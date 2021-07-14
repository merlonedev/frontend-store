import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutForm extends Component {
  render() {
    const { infos, handleChange, states } = this.props;
    const {
      name,
      cpf,
      cep,
      adress,
      number,
      city,
      phone,
      email,
      complement,
      nameError,
      emailError,
      phoneError,
      cepError,
      cpfError,
      adressError,
      cityError,
    } = infos;
    return (
      <form className="checkout-form">
        <h2>Informações do Comprador</h2>
        <input
          name="name"
          data-testid="checkout-fullname"
          placeholder="Nome completo"
          value={ name }
          type="text"
          onChange={ handleChange }
          className={ nameError ? 'invalid' : '' }
        />
        <span style={ { color: 'red' } }>{ nameError }</span>
        <input
          name="cpf"
          data-testid="checkout-cpf"
          placeholder="CPF"
          value={ cpf }
          type="number"
          onChange={ handleChange }
          className={ cpfError ? 'invalid' : '' }
        />
        <span style={ { color: 'red' } }>{ cpfError }</span>
        <input
          name="email"
          data-testid="checkout-email"
          placeholder="Email"
          value={ email }
          type="email"
          onChange={ handleChange }
          className={ emailError ? 'invalid' : '' }
        />
        <span style={ { color: 'red' } }>{ emailError }</span>
        <input
          name="phone"
          data-testid="checkout-phone"
          placeholder="Telefone"
          value={ phone }
          type="number"
          onChange={ handleChange }
          className={ phoneError ? 'invalid' : '' }
        />
        <span style={ { color: 'red' } }>{ phoneError }</span>
        <input
          name="cep"
          data-testid="checkout-cep"
          placeholder="CEP"
          value={ cep }
          type="number"
          onChange={ handleChange }
          className={ cepError ? 'invalid' : '' }
        />
        <span style={ { color: 'red' } }>{ cepError }</span>
        <input
          name="adress"
          data-testid="checkout-adress"
          placeholder="Endereço"
          value={ adress }
          type="text"
          onChange={ handleChange }
          className={ adressError ? 'invalid' : '' }
        />
        <span style={ { color: 'red' } }>{ adressError }</span>
        <input
          name="complement"
          data-testid="checkout-complement"
          placeholder="Complemento"
          value={ complement }
          type="text"
          onChange={ handleChange }
        />
        <input
          name="number"
          data-testid="checkout-number"
          placeholder="Número"
          value={ number }
          type="number"
          onChange={ handleChange }
        />
        <input
          name="city"
          data-testid="checkout-city"
          placeholder="Cidade"
          value={ city }
          type="text"
          onChange={ handleChange }
          className={ cityError ? 'invalid' : '' }
        />
        <span style={ { color: 'red' } }>{ cityError }</span>
        <label htmlFor="state-select">
          Estado
          <select name="state-select" id="state-select">
            {states.map((state) => (
              <option value={ state } key={ state }>{ state }</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  infos: PropTypes.shape({
    name: PropTypes.string,
    cpf: PropTypes.string,
    email: PropTypes.string,
    adress: PropTypes.string,
    cep: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
    number: PropTypes.string,
    complement: PropTypes.string,
    nameError: PropTypes.string,
    emailError: PropTypes.string,
    cpfError: PropTypes.string,
    cepError: PropTypes.string,
    phoneError: PropTypes.string,
    cityError: PropTypes.string,
    adressError: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
};
