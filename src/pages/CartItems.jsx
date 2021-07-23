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
    this.sumOfItens = this.sumOfItens.bind(this);
    this.subOfItens = this.subOfItens.bind(this);
  }

  componentDidMount() {
    this.loadStates();
  }

  componentDidUpdate() {
    const { cartItems, total } = this.state;
    this.saveCartItemStorage(cartItems, total);
  }

  saveCartItemStorage(cartItems, total) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    if (total) localStorage.setItem('total', JSON.stringify(total));
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
      ...setItemCart.reduce((newStates, state) => {
        newStates.cartItems = [...newStates.cartItems, state];
        newStates.totalItems += state.count;
        newStates.total += state.product.price * (state.count - 1);
        return newStates;
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
    const { sendTotal } = this.props;
    const amountCart = totalItems;
    return (
      <div className="cart">
        <div className="cart-header">
          <Link className="goBack-cart" to="/"><TiArrowBack /></Link>
          <div className="cart-title">
            <CartIcon amount={ amountCart } />
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
                className="empty-cart"
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </div>
            )
        }
        <div className="checkout-cart">
          <span className="total-cart">
            Valor Total da Compra:
            <span className="total-price">
              {`${(total).toLocaleString('pt-BR', {
                minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`}
            </span>
          </span>
          <Link
            to="/checkout"
            data-testid="checkout-products"
            className="checkout-btn"
            onClick={ () => sendTotal(total) }
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
  updateItem: PropTypes.func.isRequired,
  sendTotal: PropTypes.func.isRequired,
};

export default CartItems;
