import React, { Component } from 'react';
import InputName from './components_form/InputName';
import InputCPF from './components_form/InputCPF';
import InputEmail from './components_form/InputEmail';
import InputPhone from './components_form/InputPhone';
import InputCEP from './components_form/InputCEP';
import InputAddress from './components_form/InputAddress';
import InputComplement from './components_form/InputComplement';
import InputNumber from './components_form/InputNumber';
import InputCity from './components_form/InputCity';
import SelectStates from './components_form/SelectStates';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
      state: 'Estado',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name,
      cpf,
      email,
      phone,
      cep,
      address,
      complement,
      number,
      city,
      state,
    } = this.state;
    return (
      <form className="checkout-form">
        <fieldset>
          <legend><h3>Informações do Comprador</h3></legend>
          <InputName
            name="name"
            onChange={ this.handleChange }
            value={ name }
          />
          <InputCPF
            name="cpf"
            onChange={ this.handleChange }
            value={ cpf }
          />
          <InputEmail
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
          <InputPhone
            name="phone"
            onChange={ this.handleChange }
            value={ phone }
          />
          <InputCEP
            name="cep"
            onChange={ this.handleChange }
            value={ cep }
          />
          <InputAddress
            name="address"
            onChange={ this.handleChange }
            value={ address }
          />
          <InputComplement
            name="complement"
            value={ complement }
            onChange={ this.handleChange }
          />
          <InputNumber
            name="number"
            value={ number }
            onChange={ this.handleChange }
          />
          <InputCity
            name="city"
            value={ city }
            onChange={ this.handleChange }
          />
          <SelectStates
            name="state"
            value={ state }
            onChange={ this.handleChange }
          />
        </fieldset>

      </form>
    );
  }
}

export default CheckoutForm;
