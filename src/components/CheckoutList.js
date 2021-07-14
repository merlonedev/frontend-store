import React from 'react';
import PropTypes from 'prop-types';

class CheckoutList extends React.Component {
  render() {
    const { cartItems } = this.props;
    let totalPrice = 0;
    return (
      <section>
        { cartItems.length > 0 ? (
          <ul>
            { cartItems.map(({ price, title, thumbnail }) => {
              totalPrice += price;
              return (
                <li key={ title }>
                  <img src={ thumbnail } alt={ title } />
                  <span>{ title }</span>
                  <p>{ `Valor: R$${price}` }</p>
                </li>
              );
            }) }
            <div>{ `Total: R$${totalPrice}` }</div>
          </ul>
        ) : <p>Adicone produtos no carrinho para prosseguir para o pagamento</p>}
      </section>
    );
  }
}

CheckoutList.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckoutList;
