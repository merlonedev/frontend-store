import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete, MdAdd, MdRemove } from 'react-icons/md';
import '../styles/cartManipulation.css';

class CartManipulation extends React.Component {
  constructor() {
    super();
    this.state = {
      productQuantity: 1,
    };
    this.addQuantity = this.addQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { item } = this.props;
    const availableQuantity = item.available_quantity;
    const { productQuantity } = nextState;
    if (availableQuantity >= productQuantity && productQuantity > 0) return true;
    return false;
  }

  addQuantity(quantity) {
    this.setState({
      productQuantity: quantity + 1,
    });
  }

  decreaseQuantity(quantity) {
    this.setState({
      productQuantity: quantity - 1,
    });
  }

  render() {
    const { item, removeItem, item: { price } } = this.props;
    const { productQuantity } = this.state;
    return (
      <section>
        <div key={ item.id }>
          <h1
            data-testid="shopping-cart-product-name"
            className="cart-manipulation-title"
          >
            Produto:
            {' '}
            { item.title }
          </h1>
          <p
            data-testid="shopping-cart-product-quantity"
            className="cart-manipulation-quantity"
          >
            Quantidade:
            {' '}
            { productQuantity }
          </p>
          <button
            type="button"
            onClick={ () => removeItem(item) }
            className="cart-manipulation-remove-btn"
          >
            <MdDelete size={ 20 } />
          </button>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.addQuantity(productQuantity) }
            className="cart-manipulation-add-btn"
          >
            <MdAdd size={ 20 } />
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => this.decreaseQuantity(productQuantity) }
            className="cart-manipulation-decrease-btn"
          >
            <MdRemove size={ 20 } />
          </button>
          <p className="cart-manipulation-price">
            Preço total:
            {' '}
            {
              (`R$ ${productQuantity * price}`)
            }
          </p>
        </div>
      </section>
    );
  }
}

CartManipulation.propTypes = {
  item: PropTypes.objectOf({
    price: PropTypes.number.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartManipulation;
