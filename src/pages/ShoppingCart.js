import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartMsg from '../Components/ShoppingCartMsg';

class ShoppingCart extends Component {
  render() {
    const { productList } = this.props;
    return (
      <section>
        <Link to="/">Home</Link>
        {
          (productList.length === 0)
            ? <ShoppingCartMsg />
            : <div> olá</div>
        }
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
