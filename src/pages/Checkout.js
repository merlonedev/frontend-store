import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { history } = this.props;
    event.preventDefault();

    const { isActive } = this.state;
    this.setState({ isActive: !isActive });

    const emptyFormAnswer = Object.values(this.state).filter((item) => item.length === 0);

    if (emptyFormAnswer.length === 0) {
      this.setState({
        fullName: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        address: '',
      });
      history.push('/');
    }
  }

  render() {
    const { isActive } = this.state;
    const { products } = this.props;
    const { fullName, email, cpf, phone, cep, address, info, number, city } = this.state;
    const total = products.reduce((acc, cur) => acc + cur.price * cur.quantityInCart, 0);
    return (
      <div>
        <header className="row">
          <h2>Revise seus produtos</h2>
        </header>
        <main>
          <div>
            {
              products.map((item) => {
                const { id, title, thumbnail, quantityInCart, price } = item;
                return (
                  <div key={ id } className="row">
                    <img src={ thumbnail } alt={ title } className="thumb-size" />
                    <h3 data-testid="shopping-cart-product-name">{title}</h3>
                    <p>
                      { `Quantidade: ${quantityInCart}` }
                    </p>
                    <p>
                      R$
                      { quantityInCart * price.toFixed(2) }
                    </p>
                  </div>
                );
              })
            }
            {
              products.length !== 0
              && <h4>{`Valor Total da Compra: R$${total.toFixed(2)}`}</h4>
            }
          </div>

          <form className="form" onSubmit={ this.handleSubmit }>

            <legend>Informações do Comprador</legend>
            <input
              className={ isActive ? 'active' : null }
              data-testid="checkout-fullname"
              id="fullName"
              name="fullName"
              type="text"
              onChange={ this.handleChange }
              value={ fullName }
              placeholder="Nome Completo"
            />
            <input
              className={ isActive ? 'active' : null }
              data-testid="checkout-email"
              id="email"
              name="email"
              type="email"
              onChange={ this.handleChange }
              value={ email }
              placeholder="Email"
            />
            <input
              className={ isActive ? 'active' : null }
              data-testid="checkout-cpf"
              id="cpf"
              name="cpf"
              type="text"
              onChange={ this.handleChange }
              value={ cpf }
              placeholder="CPF"
            />
            <input
              className={ isActive ? 'active' : null }
              data-testid="checkout-phone"
              id="phone"
              name="phone"
              type="text"
              onChange={ this.handleChange }
              value={ phone }
              placeholder="Telefone"
            />
            <input
              className={ isActive ? 'active' : null }
              data-testid="checkout-cep"
              id="cep"
              name="cep"
              type="text"
              onChange={ this.handleChange }
              value={ cep }
              placeholder="CEP"
            />
            <input
              className={ isActive ? 'active' : null }
              data-testid="checkout-address"
              id="address"
              name="address"
              type="text"
              onChange={ this.handleChange }
              value={ address }
              placeholder="Endereço"
            />
            <input
              className={ isActive ? 'active' : null }
              id="complemento"
              name="complemento"
              type="text"
              onChange={ this.handleChange }
              value={ info }
              placeholder="Complemento"
            />
            <input
              className={ isActive ? 'active' : null }
              id="numero"
              name="numero"
              type="number"
              onChange={ this.handleChange }
              value={ number }
              placeholder="Número"
            />
            <input
              className={ isActive ? 'active' : null }
              id="cidade"
              name="cidade"
              type="text"
              onChange={ this.handleChange }
              value={ city }
              placeholder="Cidade"
            />
            <select name="estado" id="estado">
              <option value="mg">Minas Gerais</option>
              <option value="sp">São Paulo</option>
              <option value="ro">Rondônia</option>
              <option value="ms">Mato Grosso do Sul</option>
              <option value="ms">Mato Grosso do Sul</option>
            </select>

            <legend>Método de Pagamento</legend>
            <label htmlFor="boleto">
              Boleto
              <input type="radio" id="boleto" name="payment" value="boleto" />
            </label>
            <label htmlFor="visa">
              Visa
              <input type="radio" id="visa" name="payment" value="visa" />
            </label>
            <label htmlFor="master">
              MasterCard
              <input type="radio" id="master" name="payment" value="master" />
            </label>
            <label htmlFor="elo">
              Elo
              <input type="radio" id="elo" name="payment" value="elo" />
            </label>
            <button type="submit">Comprar</button>
          </form>
        </main>
      </div>
    );
  }
}

Checkout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantityInCart: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired }).isRequired,
};

export default Checkout;
