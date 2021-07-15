import React from 'react';
import PropTypes from 'prop-types';

export default class CheckoutName extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <input
        type="text"
        data-testid="checkout-fullname"
        name="name"
        placeholder="Nome completo"
        value={ name }
        onChange={ handleChange }
      />
    );
  }
}

CheckoutName.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
