import React from 'react';
import PropTypes from 'prop-types';

class CartManipulation extends React.Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
    };
    this.add = this.add.bind(this);
    this.retira = this.retira.bind(this);
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { item } = this.props;
    const availableQuantity = item.available_quantity;
    const { quantidade } = nextState;
    if (availableQuantity >= quantidade && quantidade > 0) return true;
    return false;
  }

  add() {
    this.setState((prev) => ({
      quantidade: prev.quantidade + 1,
    }));
  }

  retira() {
    this.setState((prev2) => ({
      quantidade: prev2.quantidade - 1,
    }));
  }

  render() {
    const { item, removeItem, item: { price } } = this.props;
    const { quantidade } = this.state;
    return (
      <section>
        <h3>
          Carrinho De Compras
        </h3>
        <div key={ item.id }>
          <h1 data-testid="shopping-cart-product-name">{ item.title }</h1>
          <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
          <button type="button" onClick={ () => removeItem(item) }>
            X
          </button>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.add }
          >
            Increase
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.retira }
          >
            Decrease
          </button>
          <p>
            {
              (`R$ ${quantidade * price}`)
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
