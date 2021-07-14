import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericInput extends Component {
  render() {
    const { type, name, value, onChange, placeholder, id } = this.props;

    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
        id={ id }
      />
    );
  }
}

GenericInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default GenericInput;
