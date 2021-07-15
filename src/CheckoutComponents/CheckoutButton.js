import React from 'react';
import PropTypes from 'prop-types';

export default class CheckoutButton extends React.Component {
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
