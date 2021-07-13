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
    let local = localStorage.getItem('Cart');
    local = JSON.parse(local);
    this.setState({
      cartItems: [...local],
    });
  }

  render() {
    const { cartItems } = this.state;
    if (!cartItems) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <section>
        <Link to="/"><AiFillHome color="green" /></Link>
        {cartItems.map((item) => <CartCard key={ item.id } product={ item } />)}
      </section>

    );
  }
}

export default Cart;
