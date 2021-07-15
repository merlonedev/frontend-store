import React, { Component } from 'react';
import CheckoutInput from '../components/CheckoutInput';

const array = [
  {
    placeholder: 'Nome completo',
    name: 'fullname',
    type: 'text',
  },

  {
    placeholder: 'Email',
    name: 'email',
    type: 'text',
  },

  {
    placeholder: 'CPF',
    name: 'cpf',
    type: 'number',
  },

  {
    placeholder: 'Telefone',
    name: 'phone',
    type: 'number',
  },

  {
    placeholder: 'CEP',
    name: 'cep',
    type: 'number',
  },
  {
    placeholder: 'Endereço',
    name: 'address',
    type: 'text',
  },
];

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { state } = this;
    return (
      <main>
        <form>
          { array.map((field) => (
            <CheckoutInput
              key={ field.name }
              placeholder={ field.placeholder }
              name={ field.name }
              onChange={ this.handleChange }
              value={ state[field.name] }
              type={ field.type }
            />)) }
        </form>
      </main>
    );
  }
}

export default Checkout;
