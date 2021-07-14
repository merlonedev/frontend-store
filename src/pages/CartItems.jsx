import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import ProductInCart from '../components/ProductInCart';
import Loading from '../components/Loading';

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItens: [],
      loading: true,
    };
    this.loadItens = this.loadItens.bind(this);
    this.itemCartRemove = this.itemCartRemove.bind(this);
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
    const cartUpdated = cartItens.map((item) => item.id !== itemId);
    this.setState({
      cartItens: [...cartUpdated],
    });
  }

  render() {
    const { cartItens, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div className="cart">
        <div className="cart-header">
          <Link className="goBack-cart" to="/"><TiArrowBack /></Link>
          <div className="cart-title">
            <FiShoppingCart />
            Carrinho de Compras
          </div>
        </div>
        {
          cartItens.length > 0
            ? cartItens.map((cartItem) => (
              <ProductInCart
                key={ cartItem.id }
                product={ cartItem }
                onClick={ this.itemCartRemove }
              />
            ))
            : <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        }
      </div>
    );
  }
}

export default CartItems;
