import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Input from '../components/Input';
import CheckoutList from '../components/CheckoutList';

const getElementCart = JSON.parse(sessionStorage.getItem('addCart'));
const initialState = {
  cartItems: !getElementCart ? [] : getElementCart,
  checkForm: {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    cep: '',
    endereço: '',
  },
  redirect: false,
};

class Checkout extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitPayment = this.submitPayment.bind(this);

    this.state = initialState;
  }

  handleChange({ target }) {
    const { checkForm } = this.state;
    const { value, name } = target;
    checkForm[name] = value;
    this.setState({ checkForm });
  }

  submitPayment() {
    const { checkForm } = this.state;
    const values = Object.values(checkForm);
    if (!values.includes('')) {
      this.setState({
        checkForm: {
          nome: '',
          email: '',
          cpf: '',
          telefone: '',
          cep: '',
          endereço: '',
        },
        redirect: true,
      });
      sessionStorage.setItem('addCart', JSON.stringify([]));
    }
  }

  render() {
    const {
      cartItems,
      checkForm,
      redirect,
    } = this.state;
    const { nome, email, cpf, telefone, cep, endereço } = checkForm;

    return (
      <section>
        <Link to="/shopping-cart" />
        <main>
          <section>
            <h2>Revise seus produtos</h2>
            <CheckoutList cartItems={ cartItems } />
            <form onSubmit={ (e) => { e.preventDefault(); } }>
              <Input
                id="checkout-fullname"
                name="nome"
                value={ nome }
                handleChange={ this.handleChange }
              >
                Nome completo
              </Input>
              <Input
                type="email"
                id="checkout-email"
                name="email"
                value={ email }
                handleChange={ this.handleChange }
              >
                Email
              </Input>
              <Input
                id="checkout-cpf"
                name="cpf"
                value={ cpf }
                handleChange={ this.handleChange }
              >
                CPF
              </Input>
              <Input
                id="checkout-phone"
                name="telefone"
                value={ telefone }
                handleChange={ this.handleChange }
              >
                Telefone
              </Input>
              <Input
                id="checkout-cep"
                name="cep"
                value={ cep }
                handleChange={ this.handleChange }
              >
                CEP
              </Input>
              <Input
                id="checkout-address"
                name="endereço"
                value={ endereço }
                handleChange={ this.handleChange }
              >
                Endereço
              </Input>
              <button type="submit" onClick={ this.submitPayment }>Comprar</button>
            </form>
            { redirect && <Redirect to="/" /> }
          </section>
        </main>
      </section>
    );
  }
}

export default Checkout;
