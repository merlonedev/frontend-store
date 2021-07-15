import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class ListProd extends Component {
  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return 'Nenhum produto foi encontrado';
    }

    return (
      <section>
        { products.map((item) => <CartItem key={ item.id } data={ item } />) }
      </section>
    );
  }
}

ListProd.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ListProd;
