import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, value, testId } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        data-testid={ testId }
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Button;
