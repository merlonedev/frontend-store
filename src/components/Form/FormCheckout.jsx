import React from 'react';
import * as data from './estados.json';

class FormCheckout extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      cpf: '',
      email: '',
      telefone: '',
      cep: '',
      endereco: '',
      complemento: '',
      numero: '',
      cidade: '',
      estado: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name,
      cpf,
      email,
      telefone,
      cep, endereco, complemento, numero, cidade, estado } = this.state;
    return (
      <form className="form-checkout">
        <h3>Informações do Comprador</h3>
        <input
          data-testid="checkout-fullname"
          type="text"
          name="name"
          value={ name }
          placeholder="Nome Completo"
          onChange={ this.handleChange }
        />
        <input
          data-testid="checkout-cpf"
          type="text"
          name="cpf"
          value={ cpf }
          placeholder="CPF"
          onChange={ this.handleChange }
        />
        <input
          data-testid="checkout-email"
          type="text"
          name="email"
          value={ email }
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="checkout-phone"
          type="text"
          name="telefone"
          value={ telefone }
          placeholder="Telefone"
          onChange={ this.handleChange }
        />
        <input
          data-testid="checkout-cep"
          type="text"
          name="cep"
          value={ cep }
          placeholder="CEP"
          onChange={ this.handleChange }
        />
        <input
          data-testid="checkout-address"
          type="text"
          name="endereco"
          value={ endereco }
          placeholder="Endereço"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="complemento"
          value={ complemento }
          placeholder="Complemento"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="numero"
          value={ numero }
          placeholder="Número"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="cidade"
          value={ cidade }
          placeholder="Cidade"
          onChange={ this.handleChange }
        />
        <select
          type="text"
          name="estado"
          value={ estado }
          placeholder="Estado"
          onChange={ this.handleChange }
        >
          {
            data.UF.map((uf) => <option key={ uf.sigla }>{uf.nome}</option>)
          }
        </select>
      </form>
    );
  }
}

export default FormCheckout;
