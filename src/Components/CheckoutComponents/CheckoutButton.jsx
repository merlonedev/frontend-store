import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={ onClick }>Comprar</button>
    );
  }
}

CheckoutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CheckoutButton;
