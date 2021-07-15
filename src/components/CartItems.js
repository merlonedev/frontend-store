import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import SubtractButton from './SubtractButton';
import RemoveButton from './RemoveButton';

class CartItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantityEachItem: {},
      productList: props.productList,
      totalPrice: props.totalPrice,
    };

    this.setInitialQuantity = this.setInitialQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.sumTotalPrice = this.sumTotalPrice.bind(this);
    this.subtractTotalPrice = this.subtractTotalPrice.bind(this);
    this.subtractPriceOfRemovedItem = this.subtractPriceOfRemovedItem.bind(this);
  }

  componentDidMount() {
    const { productList } = this.state;
    productList.forEach(({ id }) => this.setInitialQuantity(id));
  }

  componentDidUpdate() {
    const { productList } = this.state;
    const totalQuantity = productList.reduce((acc, { id }) => {
      const { quantityEachItem: { [id]: quantity } } = this.state;
      return acc + quantity;
    }, 0);
    localStorage.setItem('totalQuantity', totalQuantity);
  }

  setInitialQuantity(id) {
    this.setState(({ quantityEachItem }) => ({
      quantityEachItem: {
        ...quantityEachItem,
        [id]: 1,
      },
    }));
  }

  increaseQuantity(id) {
    this.setState(({ quantityEachItem }) => ({
      quantityEachItem: {
        ...quantityEachItem,
        [id]: quantityEachItem[id] + 1,
      },
    }));
  }

  decreaseQuantity(id) {
    this.setState(({ quantityEachItem }) => ({
      quantityEachItem: {
        ...quantityEachItem,
        [id]: (quantityEachItem[id] <= 1) ? 1 : quantityEachItem[id] - 1,
      },
    }));
  }

  removeItem(id) {
    this.setState((prevState) => ({
      ...prevState,
      productList: prevState.productList.filter((product) => product.id !== id),
    }), () => {
      const { productList } = this.state;
      localStorage.setItem('productList', JSON.stringify(productList));
    });
  }

  sumTotalPrice(price) {
    this.setState(({ totalPrice }) => ({
      totalPrice: totalPrice + price,
    }));
  }

  subtractTotalPrice(price, quantity) {
    if (quantity === 1) return;
    this.setState(({ totalPrice }) => ({
      totalPrice: totalPrice - price,
    }));
  }

  subtractPriceOfRemovedItem(price, quantity) {
    const updatedPrice = price * quantity;
    this.setState(({ totalPrice }) => ({
      totalPrice: totalPrice - updatedPrice,
    }));
  }

  render() {
    const { productList, totalPrice } = this.state;

    return (
      <ul>
        {productList.map(({
          price,
          title,
          thumbnail,
          id,
          available_quantity: availableQuantity }) => {
          const { quantityEachItem: { [id]: quantity } } = this.state;
          // localStorage.setItem('productList')
          return (
            <li key={ id }>
              <RemoveButton
                id={ id }
                price={ price }
                quantity={ quantity }
                removeItem={ this.removeItem }
                subtractPriceOfRemovedItem={ this.subtractPriceOfRemovedItem }
              />
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <SubtractButton
                id={ id }
                price={ price }
                quantity={ quantity }
                decreaseQuantity={ this.decreaseQuantity }
                subtractTotalPrice={ this.subtractTotalPrice }
              />
              <div data-testid="shopping-cart-product-quantity">{ quantity }</div>
              <AddButton
                id={ id }
                price={ price }
                quantity={ quantity }
                increaseQuantity={ this.increaseQuantity }
                sumTotalPrice={ this.sumTotalPrice }
                availableQuantity={ availableQuantity }
              />
              <p>
                { `R$${(price * quantity).toFixed(2)}` }
              </p>
            </li>
          );
        })}
        <p>{`Valor Total da Compra: R$${totalPrice.toFixed(2)}`}</p>
      </ul>
    );
  }
}

CartItems.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CartItems;
