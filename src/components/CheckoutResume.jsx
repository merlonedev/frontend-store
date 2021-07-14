import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutForm extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    const { items } = this.props;
    const totalValue = formatter.format(Object.entries(cart)
      .reduce((a, e) => a + e[1][2] * e[1][1], 0));
    return (
      <section className="products-resume">
        <h2>Revise seus Produtos</h2>
        <div>
          { items
            .map((item) => (
              <div key={ item[0] }>{`${item[0]} ${formatter.format(item[2])}`}</div>
            ))}
        </div>
        <p>
          Total:
          { totalValue }
        </p>
      </section>
    );
  }
}
