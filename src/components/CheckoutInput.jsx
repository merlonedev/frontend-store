import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutInput extends Component {
  render() {
    const { type, id, label } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input type={ type } data-testid={ id } id={ id } />
      </label>
    );
  }
}

CheckoutInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
