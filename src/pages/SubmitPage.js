import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubmitPage extends Component {
  constructor() {
    super();
    this.addStorage = this.addStorage.bind(this);
    this.state = {
      carrinho: [],
    };
  }

  componentDidMount() {
    this.addStorage();
  }

  addStorage() {
    const storage = JSON.parse(localStorage.getItem('itens'));
    if (storage) {
      this.setState({
        carrinho: storage,
      });
    }
  }

  render() {
    const { carrinho } = this.state;
    if (!carrinho.length) {
      return <span>Seu carrinho está vazio</span>;
    }
    return (
      <div>
        <section>
          <form>
            <label htmlFor="name">
              Nome Completo
              <input id="name" type="text" data-testid="checkout-fullname" />
            </label>
            <label htmlFor="email">
              Email
              <input id="email" type="email" data-testid="checkout-email" />
            </label>
            <label htmlFor="cpf">
              CPF
              <input id="cpf" type="text" data-testid="checkout-cpf" />
            </label>
            <label htmlFor="phone">
              Telefone
              <input id="phone" type="text" data-testid="checkout-phone" />
            </label>
            <label htmlFor="cep">
              CEP
              <input id="cep" type="text" data-testid="checkout-cep" />
            </label>
            <label htmlFor="address">
              Endereço
              <input id="address" type="text" data-testid="checkout-address" />
            </label>
          </form>
        </section>
        <section>
          <ul>
            { carrinho.map((item) => <li key={ item.id }>{ item.title }</li>) }
          </ul>
          { `R$: ${carrinho.reduce((acc, curr) => (acc + curr.price), 0)}` }
        </section>
        <Link className="link" to="/">Página Principal</Link>
      </div>
    );
  }
}

export default SubmitPage;
