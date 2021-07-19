import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class CartList extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
  }

  handleClickIncrease() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  }

  handleClickDecrease() {
    const { quantity } = this.state;
    this.setState({
      quantity: (quantity >= 1 ? quantity - 1 : quantity),
    });
  }

  render() {
    const { products } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        { products.map((product) => (<CartItem
          key={ product.title }
          product={ product }
          handleIncrease={ this.handleClickIncrease }
          handleDecrease={ this.handleClickDecrease }
        />))}
        <p>
          { `Quantidade: ${quantity + products.length}` }
        </p>
      </div>
    );
  }
}

CartList.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
export default CartList;
