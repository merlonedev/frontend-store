import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import states from '../services/checkoutStates';

const initialState = {
  name: '',
  email: '',
  cpf: '',
  phone: '',
  adress: '',
  cep: '',
  complement: '',
  number: '',
  city: '',
  nameError: '',
  emailError: '',
  cpfError: '',
  phoneError: '',
  adressError: '',
  cityError: '',
};

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.validate = this.validate.bind(this);
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.validate();
    if (this.validate) { return (<Link to="/" />); }
    return false;
  }

  validate() {
    const emailValidate = /\w{1,15}@\w\.?\w/;
    const stringValidate = /\w{2,20}/i;
    const cpfAndPhoneValidate = /\d{11}/;
    const cepValidate = /\d{8}/;
    let nameError = '';
    let emailError = '';
    let cpfError = '';
    let cepError = '';
    let adressError = '';
    let cityError = '';
    let phoneError = '';
    const { name, cpf, cep, adress, city, phone, email } = this.state;

    if (!emailValidate.test(email)) { emailError = 'Email inválido'; }
    if (!stringValidate.test(name)) { nameError = 'Nome é obrigatório'; }
    if (!stringValidate.test(adress)) { adressError = 'Endereço é obrigatório'; }
    if (!stringValidate.test(city)) { cityError = 'Cidade é obrigatório'; }
    if (!cpfAndPhoneValidate.test(phone)) { phoneError = 'Número de telefone inválido'; }
    if (!cpfAndPhoneValidate.test(cpf)) { cpfError = 'CPF inválido'; }
    if (!cepValidate.test(cep)) { cepError = 'CEP inválido'; }
    if (
      nameError
      || emailError
      || cpfError
      || cepError
      || adressError
      || cityError
      || phoneError) {
      this
        .setState({
          nameError, emailError, cepError, adressError, cityError, phoneError,
        });
      return false;
    }
    return true;
  }

  render() {
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
    } = this.state;

    return (
      <main className="checkout">
        <section className="products-resume">
          <h2>Revise seus Produtos</h2>
          <div>--PRODUCTS--</div>
          <p>Total: R$ XXX,XX</p>
        </section>
        <form className="checkout-form">
          <h2>Informações do Comprador</h2>
          <input
            name="name"
            data-testid="checkout-fullname"
            placeholder="Nome completo"
            value={ name }
            type="text"
            onChange={ this.handleChange }
            className={ nameError ? 'invalid' : '' }
          />
          <span style={ { color: 'red' } }>{ nameError }</span>
          <input
            name="cpf"
            data-testid="checkout-cpf"
            placeholder="CPF"
            value={ cpf }
            type="number"
            onChange={ this.handleChange }
            className={ cpfError ? 'invalid' : '' }
          />
          <span style={ { color: 'red' } }>{ cpfError }</span>
          <input
            name="email"
            data-testid="checkout-email"
            placeholder="Email"
            value={ email }
            type="email"
            onChange={ this.handleChange }
            className={ emailError ? 'invalid' : '' }
          />
          <span style={ { color: 'red' } }>{ emailError }</span>
          <input
            name="phone"
            data-testid="checkout-phone"
            placeholder="Telefone"
            value={ phone }
            type="number"
            onChange={ this.handleChange }
            className={ phoneError ? 'invalid' : '' }
          />
          <span style={ { color: 'red' } }>{ phoneError }</span>
          <input
            name="cep"
            data-testid="checkout-cep"
            placeholder="CEP"
            value={ cep }
            type="number"
            onChange={ this.handleChange }
            className={ cepError ? 'invalid' : '' }
          />
          <span style={ { color: 'red' } }>{ cepError }</span>
          <input
            name="adress"
            data-testid="checkout-adress"
            placeholder="Endereço"
            value={ adress }
            type="text"
            onChange={ this.handleChange }
            className={ adressError ? 'invalid' : '' }
          />
          <span style={ { color: 'red' } }>{ adressError }</span>
          <input
            name="complement"
            data-testid="checkout-complement"
            placeholder="Complemento"
            value={ complement }
            type="text"
            onChange={ this.handleChange }
          />
          <input
            name="number"
            data-testid="checkout-number"
            placeholder="Número"
            value={ number }
            type="number"
            onChange={ this.handleChange }
          />
          <input
            name="city"
            data-testid="checkout-city"
            placeholder="Cidade"
            value={ city }
            type="text"
            onChange={ this.handleChange }
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
        <section className="payment-checkout">
          <h2>Método de Pagamento</h2>
          <label htmlFor="payment">
            <h4>Boleto</h4>
            <input type="radio" name="payment" label="Boleto" id="boleto" />
            <h4>Cartão de Crédito</h4>
            <label htmlFor="visa">
              <input type="radio" name="payment" label="Visa" id="visa" />
              Visa
            </label>
            <label htmlFor="master">
              <input type="radio" name="payment" label="MasterCard" id="master" />
              MasterCard
            </label>
            <label htmlFor="elo">
              <input type="radio" name="payment" label="Elo" id="elo" />
              Elo
            </label>
          </label>
        </section>
        <button type="button" onClick={ this.handleSubmit }>Comprar</button>
        {/* <Link to="/">
        </Link> */}
      </main>
    );
  }
}
