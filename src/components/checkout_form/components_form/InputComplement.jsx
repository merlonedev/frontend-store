import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputComplement extends Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <label htmlFor="input-complement">
        <input
          name={ name }
          className="input-complement"
          id="input-complement"
          value={ value }
          type="text"
          placeholder="Complemento"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputComplement.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputComplement.defaultProps = {
  value: '',
};

export default InputComplement;
