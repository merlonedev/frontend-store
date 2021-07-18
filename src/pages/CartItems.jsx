import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import CartIcon from '../components/CartIcon';
import ProductInCart from '../components/ProductInCart';
import '../css/cartItems.css';

class CartItems extends React.Component {
  constructor({ setItemCart }) {
    super();
    const { cartItems, totalItems, total } = setItemCart.reduce((acc, state) => {
      acc.cartItems = [...acc.cartItems, state];
      acc.totalItems += state.count;
      acc.total += state.product.price * (state.count);
      return acc;
    }, { cartItems: [], totalItems: 0, total: 0 });
    this.state = {
      cartItems,
      totalItems,
      total,
    };

    this.itemCartRemove = this.itemCartRemove.bind(this);
    this.countCartItemUpdate = this.countCartItemUpdate.bind(this);
  }

  componentDidUpdate() {
    const { cartItems } = this.state;
    this.saveCartItemStorage(cartItems);
  }

  saveCartItemStorage(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  itemCartRemove(itemId) {
    const { cartItems } = this.state;
    const { removeItem } = this.props;
    const cartUpdated = cartItems.filter(({ product }) => product.id !== itemId);
    removeItem(cartUpdated);
    this.setState({
      cartItems: [...cartUpdated],
      totalItems: this.totalItemsCalculator(cartUpdated),
      total: this.totalCartCalculator(cartUpdated),
    });
  }

  totalCartCalculator(cartItems) {
    return cartItems.reduce((acc, curr) => acc + (curr.product.price * (curr.count)), 0);
  }

  totalItemsCalculator(cartItems) {
    return cartItems.reduce((acc, curr) => (curr.count + acc), 0);
  }

  countCartItemUpdate(itemId, plusOrMinusOne = 1) {
    const { cartItems } = this.state;
    const { updateItem } = this.props;
    const cartUpdated = cartItems.map((item) => {
      if (item.product.id === itemId) {
        return {
          product: item.product,
          count: item.count + plusOrMinusOne,
        };
      }
      return item;
    });

    this.setState({
      cartItems: [...cartUpdated],
      totalItems: this.totalItemsCalculator(cartUpdated),
      total: this.totalCartCalculator(cartUpdated),
    }, () => {
      updateItem(cartUpdated);
      this.saveCartItemStorage(cartUpdated);
    });
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
                    removeItem={ this.itemCartRemove }
                    onChangeExclude={ this.itemCartRemove }
                    sumCountProduct={ this.countCartItemUpdate }
                    subCountProduct={ this.countCartItemUpdate }
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
