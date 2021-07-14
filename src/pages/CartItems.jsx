import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import ProductInCart from '../components/ProductInCart';
import Loading from '../components/Loading';
import '../css/cartItems.css';

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItens: [],
      loading: true,
      total: 0,
    };
    this.loadItens = this.loadItens.bind(this);
    this.itemCartRemove = this.itemCartRemove.bind(this);
    this.totalCartCalculator = this.totalCartCalculator.bind(this);
  }

  componentDidMount() {
    this.loadItens();
  }

  loadItens() {
    const keys = Object.keys(localStorage);
    const cartItens = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    this.setState({
      cartItens: [...cartItens],
      loading: false,
    });
  }

  itemCartRemove(itemId) {
    const { cartItens } = this.state;
    localStorage.removeItem(itemId);
    const cartUpdated = cartItens.filter((item) => item.id !== itemId);
    this.setState({
      cartItens: [...cartUpdated],
    });
  }

  totalCartCalculator(totalPriceItem) {
    this.setState((prevState) => ({
      total: prevState.total + totalPriceItem,
    }));
  }

  render() {
    const { cartItens, loading, total } = this.state;
    if (loading) return <Loading />;
    return (
      <div className="cart">
        <div className="cart-header">
          <Link className="goBack-cart" to="/"><TiArrowBack /></Link>
          <div className="cart-title">
            <FiShoppingCart className="cart-logo" />
            Carrinho de Compras
          </div>
        </div>

        {
          cartItens.length > 0
            ? (
              <div className="cart-items">
                {cartItens.map((cartItem) => (
                  <ProductInCart
                    key={ cartItem.id }
                    product={ cartItem }
                    onClick={ this.itemCartRemove }
                    onChange={ this.totalCartCalculator }
                  />
                ))}
              </div>
            )
            : (
              <div
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </div>
            )
        }
        <div className="checkout-cart">
          <span className="total-cart">
            { `Valor Total da Compra: ${(total).toLocaleString('pt-BR', {
              minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`}
          </span>
          <button type="button" onClick={ () => {} } className="checkout-btn">
            Finalizar Compra
          </button>
        </div>
      </div>
    );
  }
}

export default CartItems;
