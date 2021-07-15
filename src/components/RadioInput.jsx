import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioInput extends Component {
  render() {
    const { name, number, id, value } = this.props;

    return (
      <label htmlFor={ name }>
        { number }
        <input type="radio" name={ name } id={ id } value={ value } />
      </label>
    );
  }
}

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RadioInput;
