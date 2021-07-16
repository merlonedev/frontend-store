import React from 'react';
import { Redirect } from 'react-router-dom';
import CheckoutName from '../CheckoutComponents/CheckoutName';
import CheckoutCpf from '../CheckoutComponents/CheckoutCpf';
import CheckoutEmail from '../CheckoutComponents/CheckoutEmail';
import CheckoutPhone from '../CheckoutComponents/CheckoutPhone';
import CheckoutCep from '../CheckoutComponents/CheckoutCep';
import CheckoutAddress from '../CheckoutComponents/CheckoutAddress';
import CheckoutPayment from '../CheckoutComponents/CheckoutPayment';
import CheckoutButton from '../CheckoutComponents/CheckoutButton';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      checkbox: false,
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkValues = this.checkValues.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  checkValues() {
    const { name, email, cpf, phone, cep, address, checkbox } = this.state;
    if (!name || !email || !cpf || !phone || !cep || !address || !checkbox) {
      this.setState({ mensagem: 'Preencha todos os campos' });
    } else this.setState({ redirect: true });
  }

  render() {
    const { name, cpf, email, phone, cep, address, checkbox, mensagem,
      redirect } = this.state;
    if (redirect) return <Redirect to="/search" />;
    return (
      <div>
        <div>
          <p>Revise seus produtos</p>
        </div>
        <form>
          <div>
            <p>Informações do Comprador</p>
            <p className="erro">{ mensagem }</p>
            <CheckoutName name={ name } handleChange={ this.handleChange } />
            <CheckoutCpf cpf={ cpf } handleChange={ this.handleChange } />
            <CheckoutEmail email={ email } handleChange={ this.handleChange } />
            <CheckoutPhone phone={ phone } handleChange={ this.handleChange } />
            <CheckoutCep cep={ cep } handleChange={ this.handleChange } />
            <CheckoutAddress address={ address } handleChange={ this.handleChange } />
          </div>
          <div>
            <CheckoutPayment checkbox={ checkbox } handleChange={ this.handleChange } />
          </div>
          <CheckoutButton onClick={ this.checkValues } />
        </form>
      </div>
    );
  }
}
