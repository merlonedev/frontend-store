import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutProductCard from './CheckoutProductCard';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    return null;
  }

  render() {
    const { goBackCallBack, shoppingCartProductList } = this.props;
    const { fullName, email, cpf, phone, cep, address } = this.state;
    return (
      <>
        <h1>Checkout</h1>
        <h3>
          Valor total da compra:
          {' '}
          { shoppingCartProductList
            .reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)}
        </h3>
        {shoppingCartProductList.map((product) => (<CheckoutProductCard
          key={ product.id }
          product={ product }
        />))}
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="fullName">
            Nome Completo:
            <input
              type="text"
              name="fullName"
              value={ fullName }
              onChange={ this.handleChange }
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              type="text"
              name="cpf"
              value={ cpf }
              onChange={ this.handleChange }
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              type="text"
              name="phone"
              value={ phone }
              onChange={ this.handleChange }
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              type="text"
              name="cep"
              value={ cep }
              onChange={ this.handleChange }
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              type="text"
              name="address"
              value={ address }
              onChange={ this.handleChange }
              data-testid="checkout-address"
            />
          </label>
          <input type="submit" value="Submit" data-testid="query-button" />
        </form>
        <button
          type="button"
          onClick={ goBackCallBack }
        >
          Voltar
        </button>
      </>
    );
  }
}

Checkout.propTypes = {
  shoppingCartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
  goBackCallBack: PropTypes.func.isRequired,
};

export default Checkout;
