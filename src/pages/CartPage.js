import React from 'react';
import CartEmptyMessage from '../components/CartEmptyMessage';
import CartProductItem from '../components/CartProductItem';
import cartIcon from '../icon/cart3.svg';

class CartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0,
    };

    this.plusPrice = this.plusPrice.bind(this);
    this.minusPrice = this.minusPrice.bind(this);
  }

  plusPrice(price) {
    this.setState((oldState) => ({
      totalPrice: oldState.totalPrice + price,
    }));
  }

  minusPrice(price) {
    this.setState((oldState) => ({
      totalPrice: oldState.totalPrice - price,
    }));
  }

  render() {

    const { history } = this.props;
    const { shoppingCart } = history.location;
    const { totalPrice } = this.state;

    return (
      <div>
        <header className="header-cart-page">
          <img src={ cartIcon } alt="cart icon" className="cart-icon" />
          <h1>Carrinho de Compras</h1>
        </header>
        { shoppingCart && shoppingCart.length > 0 
        ? shoppingCart.map((product) => <CartProductItem key={ product.id } plusPrice={ this.plusPrice } minusPrice={ this.minusPrice } product={ product } />)
        : <CartEmptyMessage />}
        <p>{`Preço Total: R$ ${totalPrice}`}</p>

      </div>
    );
  }
}

export default CartPage;
