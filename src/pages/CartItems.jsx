import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import CartIcon from '../components/CartIcon';
import ProductInCart from '../components/ProductInCart';
import '../css/cartItems.css';

class CartItems extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      total: 0,
      totalItems: 0,
    };
    this.loadStates = this.loadStates.bind(this);
    this.itemCartRemove = this.itemCartRemove.bind(this);
    this.totalCartCalculator = this.totalCartCalculator.bind(this);
    this.getCheckoutInfos = this.getCheckoutInfos.bind(this);
    this.sumOfItens = this.sumOfItens.bind(this);
    this.subOfItens = this.subOfItens.bind(this);
    this.cartInfos = [];
  }

  componentDidMount() {
    this.loadStates();
  }

  componentDidUpdate() {
    const { cartItems } = this.state;
    this.saveCartItemStorage(cartItems);
  }

  getCheckoutInfos(infoItem) {
    this.cartInfos = [...this.cartInfos, infoItem];
  }

  saveCartItemStorage(state) {
    localStorage.setItem('cartItems', JSON.stringify(state));
  }

  loadStates() {
    const { setItemCart } = this.props;
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    if (Array.isArray(storage) && storage.length) {
      return this.setState({
        ...storage.reduce((acc, state) => {
          acc.cartItems = [...acc.cartItems, state];
          acc.totalItems += state.count;
          acc.total += state.product.price * (state.count - 1);
          return acc;
        }, { cartItems: [], totalItems: 0, total: 0 }),
      });
    }
    this.setState({
      ...setItemCart.reduce((newState, state) => {
        newState.cartItems = [...newState.cartItems, state];
        newState.totalItems += state.count;
        newState.total += state.product.price * (state.count - 1);
        return newState;
      }, { cartItems: [], totalItems: 0, total: 0 }),
    });
  }

  itemCartRemove(itemId) {
    const { cartItems } = this.state;
    const { removeItem } = this.props;
    const cartUpdated = cartItems.filter(({ product }) => product.id !== itemId);
    removeItem(cartUpdated);
    this.setState({
      cartItems: [...cartUpdated],
      totalItems: cartUpdated.reduce((acc, curr) => (curr.count + acc), 0),
    });
  }

  totalCartCalculator(totalPriceItem) {
    this.setState((prevState) => ({
      total: prevState.total + totalPriceItem,
    }));
  }

  countCartItemUpdate(itemId, num = 1) {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems.map((item) => {
        if (item.product.id === itemId) {
          return {
            product: item.product,
            count: item.count + num,
          };
        }
        return item;
      })],
    }), () => {
      const { updateItem } = this.props;
      const { cartItems } = this.state;
      updateItem(cartItems);
      console.log(cartItems);
    });
  }

  sumOfItens(itemId) {
    this.countCartItemUpdate(itemId);
    this.setState((prevState) => ({
      totalItems: prevState.totalItems + 1,
    }));
  }

  subOfItens(itemId, bool = true) {
    if (bool) {
      const num = -1;
      this.countCartItemUpdate(itemId, num);
    }
    this.setState((prevState) => ({
      totalItems: prevState.totalItems - 1,
    }));
  }

  render() {
    const { cartItems, total, totalItems } = this.state;
    const qtd = totalItems;
    const { checkoutInfos } = this.props;
    return (
      <div className="cart">
        <div className="cart-header">
          <Link className="goBack-cart" to="/"><TiArrowBack /></Link>
          <div className="cart-title">
            <CartIcon qtd={ qtd } />
            Carrinho de Compras
          </div>
        </div>

        {
          cartItems.length > 0
            ? (
              <div className="cart-items">
                {cartItems.map(({ product, count }) => (
                  <ProductInCart
                    key={ product.id }
                    product={ product }
                    onClick={ this.itemCartRemove }
                    onChange={ this.totalCartCalculator }
                    onChangeExclude={ this.itemCartRemove }
                    sumCountProduct={ this.sumOfItens }
                    subCountProduct={ this.subOfItens }
                    count={ count }
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
          <Link
            to="/checkout"
            data-testid="checkout-products"
            onClick={ () => checkoutInfos({ total }) }
            className="checkout-btn"
          >
            Finalizar Compra
          </Link>
        </div>
      </div>
    );
  }
}

CartItems.propTypes = {
  setItemCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
  checkoutInfos: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default CartItems;
