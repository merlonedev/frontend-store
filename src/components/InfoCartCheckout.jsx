import React from 'react';
import PropTypes from 'prop-types';

class InfoCartCheckout extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <section className="product-review">
        <h3>Revise seus Produtos</h3>
        <ul>
          { cartItems.map((item) => (
            <li key={ item.id }>
              <img src={ item.thumbnail } alt={ item.title } />
              <span>{ item.title }</span>
              <span>{ item.totalPrice }</span>
            </li>
          )) }
        </ul>
        <div className="checkout-total">
          { (cartItems.reduce((acc, curr) => (acc + curr), 0)).toLocaleString('pt-BR', {
            minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) }
        </div>
      </section>
    );
  }
}

InfoCartCheckout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default InfoCartCheckout;
