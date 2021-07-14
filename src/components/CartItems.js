import React from 'react';
import PropTypes from 'prop-types';

class CartItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantityEachItem: {},
      productList: props.testCart,
    };

    this.setInitialQuantity = this.setInitialQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
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
    }));
  }

  render() {
    const { productList } = this.state;

    return (
      <ul>
        {productList.map(({ price, title, thumbnail, id }) => {
          const { quantityEachItem: { [id]: quantity } } = this.state;
          return (
            <li key={ id }>
              <button
                type="button"
                onClick={ () => this.removeItem(id) }
              >
                X
              </button>
              <img src={ thumbnail } alt={ title } />
              <p>{ title }</p>
              <button
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ () => this.decreaseQuantity(id) }
              >
                -
              </button>
              <div>{ quantity }</div>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ () => this.increaseQuantity(id) }
              >
                +
              </button>
              <p>
                { (price * quantity).toFixed(2) }
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

CartItems.propTypes = {
  testCart: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default CartItems;
