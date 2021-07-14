import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartCard from '../../components/cartcard/CartCard';

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