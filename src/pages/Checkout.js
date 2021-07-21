import React from 'react';
import { Link } from 'react-router-dom';

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
      cartItems: [],
      totalCartItems: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.loadCart = this.loadCart.bind(this);
    this.renderCartDetail = this.renderCartDetail.bind(this);
  }

  componentDidMount() {
    this.loadCart();
    this.renderCartDetail();
  }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }

      onSubmitForm = (e) => {
        e.preventDefault();
        this.setState({
          fullname: '',
          email: '',
          cpf: '',
          phone: '',
          cep: '',
          address: '',
          cartItems: [],
          totalCartItems: '',
        });
      }

      loadCart() {
        const getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
        if (getCartItems) {
          this.setState({ cartItems: getCartItems });
          const quantity = getCartItems.map((cartItem) => cartItem.quantity)
            .reduce((currentValue, nextValue) => currentValue + nextValue);
          this.setState({
            totalCartItems: quantity,
            cartItems: [...getCartItems],
          });
        }
      }

      renderCartDetail() {
        const { cartItems, totalCartItems } = this.state;
        return (
          <ul className="cart-list">
            { cartItems.map((item, index) => (
              <li className="cart-item" key={ index }>
                <img
                  className="cart-product-image"
                  data-testid="shopping-cart-product-quantity"
                  src={ item.product[0].thumbnail }
                  alt={ item.product[0].title }
                />
                <div className="item-title" data-testid="shopping-cart-product-name">
                  { item.product[0].title }
                  { totalCartItems }
                </div>
                <div
                  className="item-quantity"
                  data-testid="shopping-cart-product-quantity"
                >
                  { item.quantity }
                </div>
                <span
                  className="item-quantity"
                  data-testid="shopping-cart-product-quantity"
                >
                  { item.product[0].price }
                </span>
              </li>
            ))}
          </ul>
        );
      }

      render() {
        const { fullname, email, cpf, phone, cep, address } = this.state;

        return (
          <form className="form" onSubmit={ this.onSubmitForm }>
            { this.renderCartDetail() }
            <ul className="form-input cart-list">
              <li>
                <label htmlFor="fullname">
                  <input
                    data-testid="checkout-fullname"
                    type="text"
                    id="fullname"
                    value={ fullname }
                    placeholder="Nome Completo"
                    onChange={ this.handleChange }
                    className="form-input"
                    required
                  />
                </label>
                <label htmlFor="email">
                  <input
                    data-testid="checkout-email"
                    type="email"
                    id="email"
                    value={ email }
                    placeholder="Email"
                    onChange={ this.handleChange }
                    className="form-input"
                    required
                  />
                </label>
                <label htmlFor="cpf">
                  <input
                    data-testid="checkout-cpf"
                    type="text"
                    id="cpf"
                    value={ cpf }
                    placeholder="CPF"
                    onChange={ this.handleChange }
                    className="form-input"
                    required
                  />
                </label>
              </li>
              <li>
                <label htmlFor="phone">
                  <input
                    data-testid="checkout-phone"
                    type="text"
                    id="phone"
                    value={ phone }
                    placeholder="Telefone"
                    onChange={ this.handleChange }
                    className="form-input"
                    required
                  />
                </label>
                <label htmlFor="cep">
                  <input
                    data-testid="checkout-cep"
                    type="text"
                    id="cep"
                    value={ cep }
                    placeholder="CEP"
                    onChange={ this.handleChange }
                    className="form-input"
                    required
                  />
                </label>
                <label htmlFor="address">
                  <input
                    data-testid="checkout-address"
                    type="text"
                    id="address"
                    value={ address }
                    placeholder="Endereço"
                    onChange={ this.handleChange }
                    className="form-input"
                    required
                  />
                </label>
              </li>
              <li className="form-li">
                <span className="material-icons payment um">attach_money</span>
              </li>
              <li className="form-li dois">
                <label htmlFor="boleto">
                  <input
                    type="radio"
                    value="boleto"
                    id="boleto"
                    name="pagamento"
                  />
                  Boleto
                </label>
              </li>
              <li className="form-li">
                <span className="material-icons payment">credit_card</span>
              </li>
              <li className="form-li">
                <label htmlFor="visa">
                  <input
                    type="radio"
                    value="visa"
                    id="visa"
                    name="pagamento"
                  />
                  Visa
                </label>
              </li>
              <li className="form-li">
                <span className="material-icons payment">credit_card</span>
              </li>
              <li className="form-li">
                <label htmlFor="mastercard">
                  <input
                    type="radio"
                    value="mastercard"
                    id="mastercard"
                    name="pagamento"
                  />
                  Mastercard
                </label>
              </li>
              <li className="form-li">
                <span className="material-icons payment">credit_card</span>
              </li>
              <li className="form-li">
                <label htmlFor="elo">
                  <input
                    type="radio"
                    value="elo"
                    id="elo"
                    name="pagamento"
                  />
                  Elo
                </label>
              </li>
              <li>
                <button type="submit" className="form-button">
                  <Link to="./" className="form-link"> Comprar </Link>
                </button>
              </li>
            </ul>
          </form>
        );
      }
}

export default Checkout;
