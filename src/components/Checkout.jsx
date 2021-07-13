import React from 'react';
import DataInput from './DataInput';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      CPF: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullname, email, CPF, phone, cep, address } = this.state;
    return (
      <form>
        <DataInput
          label="Nome completo"
          inputName="fullname"
          inputType="text"
          onChangeInput={ this.handleChange }
          inputID="checkout-fullname"
          inputValue={ fullname }
        />
        <DataInput
          label="Email"
          inputName="email"
          inputType="text"
          onChangeInput={ this.handleChange }
          inputID="checkout-email"
          inputValue={ email }
        />
        <DataInput
          label="CPF"
          inputName="cpf"
          inputType="text"
          onChangeInput={ this.handleChange }
          inputID="checkout-cpf"
          inputValue={ CPF }
        />
        <DataInput
          label="Telefone"
          inputName="phone"
          inputType="text"
          onChangeInput={ this.handleChange }
          inputID="checkout-phone"
          inputValue={ phone }
        />
        <DataInput
          label="CEP"
          inputName="cep"
          inputType="text"
          onChangeInput={ this.handleChange }
          inputID="checkout-cep"
          inputValue={ cep }
        />
        <DataInput
          label="Endereço"
          inputName="address"
          inputType="text"
          onChangeInput={ this.handleChange }
          inputID="checkout-address"
          inputValue={ address }
        />
      </form>
    );
  }
}
export default Checkout;
