import React from 'react';
import FormInput from './FormInput';
import CheckInput from './CheckInput';

// Objeto do formulário das informações da pessoa.
const formObj = [
  {
    id: 'fullname',
    text: 'Nome Completo',
  },
  {
    id: 'email',
    text: 'Email',
  },
  {
    id: 'cpf',
    text: 'CPF',
  },
  {
    id: 'phone',
    text: 'Telefone',
  },
  {
    id: 'cep',
    text: 'CEP',
  },
  {
    id: 'address',
    text: 'Endereço',
  },
];

// Objeto com os tipos de Cartôes de crédito.
const cardObj = [
  {
    card: 'visa',
    text: 'Visa',
  },
  {
    card: 'mastercard',
    text: 'MasterCard',
  },
  {
    card: 'elo',
    text: 'Elo',
  },
];

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      boleto: false,
      visa: false,
      mastercard: false,
      elo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  // Função que muda o valor de estado do formulário da pessoa.
  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  // Função que muda o valor de estado da checkbox dos cartões.
  handleCheck(event) {
    const { id } = event.target;
    this.setState({
      [id]: event.target.checked,
    });
  }

  render() {
    const { boleto } = this.state;
    return (
      <main>
        <section>
          <div>
            <h3>Informações do Comprador</h3>
            <form>
              { formObj.map(({ id, text }) => {
                const { state } = this;
                return (
                  <FormInput
                    id={ id }
                    text={ text }
                    key={ id }
                    value={ state[id] }
                    onChange={ this.handleChange }
                  />
                );
              }) }
            </form>
          </div>
        </section>
        <section>
          <h3>Método de Pagamento</h3>
          <div>
            <p>Boleto</p>
            <label htmlFor="boleto">
              <input
                type="checkbox"
                id="boleto"
                checked={ boleto }
                onChange={ this.handleCheck }
              />
            </label>
          </div>
          <div>
            <p>Cartão de Crédito</p>
            { cardObj.map(({ card, text }) => {
              const { state } = this;
              return (
                <CheckInput
                  id={ card }
                  text={ text }
                  key={ card }
                  value={ state[card] }
                  onChange={ this.handleCheck }
                />
              );
            }) }
          </div>
        </section>
      </main>
    );
  }
}

export default Checkout;
