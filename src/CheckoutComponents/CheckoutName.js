import React from 'react';
import PropTypes from 'prop-types';

export default class CheckoutName extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor="checkout-fullname">
        <input
          data-testid="checkout-fullname"
          type="text"
          name="name"
          placeholder="Nome completo"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

CheckoutName.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
