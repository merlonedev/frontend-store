import React from 'react';
import PropTypes from 'prop-types';

class CartItems extends React.Component {
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
        {productList.map(({ price, title, thumbnail, id }) => {
          const { quantityEachItem: { [id]: quantity } } = this.state;
          return (
            <li key={ id }>
              <button
                type="button"
                onClick={ () => {
                  this.removeItem(id);
                  this.subtractPriceOfRemovedItem(price, quantity);
                } }
              >
                X
              </button>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <button
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ () => {
                  this.decreaseQuantity(id);
                  this.subtractTotalPrice(price, quantity);
                } }
              >
                -
              </button>
              <div data-testid="shopping-cart-product-quantity">{ quantity }</div>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ () => {
                  this.increaseQuantity(id);
                  this.sumTotalPrice(price);
                } }
              >
                +
              </button>
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
