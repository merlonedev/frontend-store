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
    const products = JSON.parse(localStorage.getItem('item'));
    let total = 0;
    return (
      <main>
        <section>
          <div>
            <h3>Revise seus Produtos</h3>
            {
              products.map((item) => (
                <div key={ item.id }>
                  <span>
                    { item.title }
                  </span>
                  <span data-testid="shopping-cart-product-quantity">
                    { item.quantity }
                  </span>
                  <span>{ item.price }</span>
                </div>
              ))
            }
            { products.forEach((item) => {
              total += item.price * item.quantity;
              return total;
            }) }
            <h3>
              Total:
              <span>{ total.toFixed(2) }</span>
            </h3>
          </div>
        </section>
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
