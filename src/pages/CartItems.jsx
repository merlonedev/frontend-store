import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import CartIcon from '../components/CartIcon';
import ProductInCart from '../components/ProductInCart';
import '../css/cartItems.css';

class CartItems extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cartItems: [...props.setItemCart],
      total: 0,
      itemsQtd: props.setItemCart.length,
    };
    this.loadCartItemStorage = this.loadCartItemStorage.bind(this);
    this.itemCartRemove = this.itemCartRemove.bind(this);
    this.totalCartCalculator = this.totalCartCalculator.bind(this);
    this.getCheckoutInfos = this.getCheckoutInfos.bind(this);
    this.sumOfItens = this.sumOfItens.bind(this);
    this.subOfItens = this.subOfItens.bind(this);
    this.cartInfos = [];
  }

  componentDidMount() {
    this.loadCartItemStorage();
  }

  getCheckoutInfos(infoItem) {
    this.cartInfos = [...this.cartInfos, infoItem];
  }

  itemCartRemove(itemId) {
    const { cartItems } = this.state;
    const { removeItem } = this.props;
    const cartUpdated = cartItems.filter((item) => item.id !== itemId);
    removeItem(cartUpdated);
    this.setState({
      cartItems: [...cartUpdated],
      itemsQtd: cartUpdated.length,
    });
  }

  totalCartCalculator(totalPriceItem) {
    this.setState((prevState) => ({
      total: prevState.total + totalPriceItem,
    }));
  }

  sumOfItens() {
    this.setState((prevState) => ({
      itemsQtd: prevState.itemsQtd + 1,
    }));
  }

  subOfItens() {
    this.setState((prevState) => ({
      itemsQtd: prevState.itemsQtd - 1,
    }));
  }

  loadCartItemStorage() {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    if (Array.isArray(storage) && storage.length) {
      this.setState({
        cartItems: [...storage],
        itemsQtd: storage.length,
      });
    }
  }

  render() {
    const { cartItems, total, itemsQtd } = this.state;
    const qtd = itemsQtd;
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
                {cartItems.map((cartItem) => (
                  <ProductInCart
                    key={ cartItem.id }
                    product={ cartItem }
                    onClick={ this.itemCartRemove }
                    onChange={ this.totalCartCalculator }
                    onChangeExclude={ this.itemCartRemove }
                    getInfoItem={ this.getCheckoutInfos }
                    sumCountProduct={ this.sumOfItens }
                    subCountProduct={ this.subOfItens }
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
            onClick={ () => checkoutInfos(this.cartInfos) }
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
};

export default CartItems;
