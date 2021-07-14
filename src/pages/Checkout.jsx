import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutResume from '../components/CheckoutResume';
import states from '../services/checkoutStates';
import initialState from '../services/checkoutInitialState';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.validate();
  }

  getProducts = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const items = Object.values(cartItems);
    this.setState({ products: items, loading: false });
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
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
    let addressError = '';
    let cityError = '';
    let phoneError = '';
    const { name, cpf, cep, address, city, phone, email } = this.state;
    if (!emailValidate.test(email)) { emailError = 'Email inválido'; }
    if (!stringValidate.test(name)) { nameError = 'Nome é obrigatório'; }
    if (!stringValidate.test(address)) { addressError = 'Endereço é obrigatório'; }
    if (!stringValidate.test(city)) { cityError = 'Cidade é obrigatório'; }
    if (!cpfAndPhoneValidate.test(phone)) { phoneError = 'Número de telefone inválido'; }
    if (!cpfAndPhoneValidate.test(cpf)) { cpfError = 'CPF inválido'; }
    if (!cepValidate.test(cep)) { cepError = 'CEP inválido'; }
    if (
      nameError
      || emailError
      || cpfError
      || cepError
      || addressError
      || cityError
      || phoneError) {
      this
        .setState({
          nameError, emailError, cepError, cpfError, addressError, cityError, phoneError,
        });
      return false;
    }
    this.setState({ shouldRedirect: true });
    return true;
  }

  render() {
    const { shouldRedirect, products, loading } = this.state;
    if (loading) { return <p>Loading...</p>; }
    if (shouldRedirect) { return <Redirect to="/" />; }
    // const abaixo declarada para burlar erro do lint "unused state field"
    const {
      nameError, emailError, cepError, cpfError, addressError, cityError, phoneError,
    } = this.state;
    return (
      <main className="checkout">
        <CheckoutResume items={ products } />
        <CheckoutForm
          handleChange={ this.handleChange }
          nameError={ nameError }
          emailError={ emailError }
          cepError={ cepError }
          cpfError={ cpfError }
          addressError={ addressError }
          cityError={ cityError }
          phoneError={ phoneError }
          infos={ this.state }
          states={ states }
        />
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
      </main>
    );
  }
}
