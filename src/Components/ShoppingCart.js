import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    this.sumPrice();
  }

  componentDidUpdate() {
    this.sumPrice();
  }

  sumPrice() {
    const { total } = this.state;
    const { cartList } = this.props;
    const sumTotal = cartList
      .map(({ price, quantity }) => price * quantity)
      .reduce((totalPrice, price) => totalPrice + price, 0);
    if (total !== sumTotal) this.setState({ total: sumTotal });
  }

  render() {
    const { total } = this.state;
    const { cartList, removeItem, setQuantity } = this.props;
    if (cartList.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div>
        <p>{`Total: ${total.toFixed(2)}`}</p>
        {
          cartList.map((
            { id, price, quantity, thumbnail, title }, index,
          ) => (<CartItem
            key={ index }
            id={ id }
            price={ price }
            quantity={ quantity }
            thumbnail={ thumbnail }
            title={ title }
            removeItem={ removeItem }
            setQuantity={ setQuantity }
          />))
        }
        <button type="button" data-testid="checkout-products"><Link to="/checkout">Finalizar compra</Link></button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
};
