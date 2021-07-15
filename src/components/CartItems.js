import React from 'react';
import PropTypes from 'prop-types';

class CartItems extends React.Component {
  render() {
    const {
      amount,
      noRepetitions,
      sessionItems,
      removeUnit,
      lessUnit,
      plusUnit,
    } = this.props;

    return (
      noRepetitions.map(({ id, title, price, thumbnail }) => (
        <li key={ `${id}${Math.random() * 100}` }>
          {/* Math.random() para nenhuma key se repetir; */}
          <div>
            <button
              type="button"
              onClick={ () => { removeUnit(id, sessionItems); } }
            >
              Remover
            </button>
            <img src={ thumbnail } alt={ title } />
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <div>
              <button
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ () => { lessUnit(id, sessionItems); } }
              >
                Menos
              </button>
              <span data-testid="shopping-cart-product-quantity">
                { amount[id] }
              </span>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ () => { plusUnit(id, sessionItems); } }
              >
                Mais
              </button>
            </div>
            <p>{ `Valor: R$ ${(price * amount[id]).toFixed(2)}` }</p>
          </div>
        </li>)));
  }
}

CartItems.propTypes = {
  amount: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  noRepetitions: PropTypes.arrayOf(PropTypes.object).isRequired,
  sessionItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeUnit: PropTypes.func.isRequired,
  lessUnit: PropTypes.func.isRequired,
  plusUnit: PropTypes.func.isRequired,
};

export default CartItems;
