import React from 'react';
import PropTypes from 'prop-types';

class CartManipulation extends React.Component {
  constructor() {
    super();
    this.state = {
      productQuantity: 1,
    };
    this.addQuantity = this.addQuantity.bind(this);
    this.retireQuantity = this.retireQuantity.bind(this);
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { item } = this.props;
    const availableQuantity = item.available_quantity;
    const { productQuantity } = nextState;
    if (availableQuantity >= productQuantity && productQuantity > 0) return true;
    return false;
  }

  addQuantity() {
    this.setState((prev) => ({
      productQuantity: prev.productQuantity + 1,
    }));
  }

  retireQuantity() {
    this.setState((prev) => ({
      productQuantity: prev.productQuantity - 1,
    }));
  }

  render() {
    const { item, removeItem, item: { price } } = this.props;
    const { productQuantity } = this.state;
    return (
      <section>
        <h3>
          Carrinho De Compras
        </h3>
        <div key={ item.id }>
          <h1 data-testid="shopping-cart-product-name">{ item.title }</h1>
          <p data-testid="shopping-cart-product-quantity">{ productQuantity }</p>
          <button type="button" onClick={ () => removeItem(item) }>
            X
          </button>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.addQuantity }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.retireQuantity }
          >
            -
          </button>
          <p>
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
