import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartCard from '../components/CartCard';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: undefined,
    };
  }

  componentDidMount() {
    this.cartSetState();
  }

  cartSetState = () => {
    if (localStorage.getItem('Cart')) {
      let local = localStorage.getItem('Cart');
      local = JSON.parse(local);
      this.setState({
        cartItems: [...local],
      });
    }
  }

  deleteCart = () => {
    localStorage.removeItem('Cart');
    localStorage.removeItem('Total');
    this.setState({
      cartItems: undefined,
    });
  }

  render() {
    const { cartItems } = this.state;
    if (cartItems !== undefined) {
      return (
        <section>
          <Link to="/"><AiFillHome color="green" /></Link>
          <button type="button" onClick={ this.deleteCart }>Apagar Todos</button>
          {cartItems.map((item) => <CartCard key={ item.id } product={ item } />)}
          <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
        </section>

      );
    }
    return (
      <section>
        <Link to="/"><AiFillHome color="green" /></Link>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </section>
    );
  }
}

export default Cart;
