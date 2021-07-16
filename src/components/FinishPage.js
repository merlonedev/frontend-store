import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FinishPage extends Component {
  render() {
    const { cartItens, location: { state: totalPrice } } = this.props;
    const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE',
      'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
      'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ',
      'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
    return (
      <>
        <ol>
          <h2>Revise seus Produtos</h2>
          {cartItens.map((item) => (
            <li key={ item.id }>
              {item.title}
              R$:
              {item.price}
            </li>))}
        </ol>
        <h1>
          Total: R$
          {totalPrice}
        </h1>
        <hr />
        <form>
          <h2>Informações do Comprador</h2>
          <label
            htmlFor="name"
          >
            Nome Completo:
            <input
              type="text"
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
            />
          </label>
          <label
            htmlFor="cpf"
          >
            CPF:
            <input
              type="text"
              placeholder="CPF"
              data-testid="checkout-cpf"
            />
          </label>
          <label
            htmlFor="email"
          >
            Email:
            <input
              type="email"
              placeholder="Email"
              data-testid="checkout-email"
            />
          </label>
          <label
            htmlFor="telefone"
          >
            Telefone:
            <input
              type="text"
              placeholder="Telefone"
              maxLength="9"
              data-testid="checkout-phone"
            />
          </label>
          <label
            htmlFor="cep"
          >
            CEP:
            <input
              type="text"
              placeholder="CEP"
              data-testid="checkout-cep"
            />
          </label>
          <label
            htmlFor="Endereço"
          >
            Endereço:
            <input
              type="text"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
          </label>
          <label
            htmlFor="complemento"
          >
            Complemento:
            <input
              type="text"
              placeholder="Complemento"
            />
          </label>
          <label
            htmlFor="numero"
          >
            Número:
            <input
              type="number"
              placeholder="Número"
            />
          </label>
          <label
            htmlFor="cidade"
          >
            Cidade:
            <input
              type="text"
              placeholder="Cidade"
            />
          </label>
          <label
            htmlFor="estado"
          >
            Estado:
            <select>
              {estados.map((estado, index) => <option key={ index }>{estado}</option>)}
            </select>
          </label>
          <fieldset id="payment">
            <h2>Método de Pagamento</h2>
            <h3>Boleto</h3>
            <label
              htmlFor="boleto"
            >
              Boleto:
              <input
                type="radio"
                name="payment"
              />
            </label>
            <h3>Cartão de Cŕedito</h3>
            <label
              htmlFor="visa"
            >
              Visa:
              <input
                type="radio"
                name="payment"
              />
            </label>
            <label
              htmlFor="masterCard"
            >
              MasterCard:
              <input
                type="radio"
                name="payment"
              />
            </label>
            <label
              htmlFor="elo"
            >
              Elo:
              <input
                type="radio"
                name="payment"
              />
            </label>
          </fieldset>
          <button
            type="button"
          >
            Comprar
          </button>
        </form>
      </>
    );
  }
}

FinishPage.propTypes = {
  cartItens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  location: PropTypes.shape(
    {
      state: PropTypes.number.isRequired,
    },
  ).isRequired,
};

export default FinishPage;
