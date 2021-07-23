import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  constructor() {
    super();
    this.someNumbers = this.someNumbers.bind(this);
  }

  someNumbers({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/\d{0,5}/)[0];
    target.value = check;
    onChange(target);
  }

  render() {
    const { value, name } = this.props;
    return (
      <label htmlFor="input-number">
        <input
          name={ name }
          className="input-number"
          id="input-number"
          value={ value }
          type="text"
          placeholder="Número"
          onChange={ this.someNumbers }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputNumber.defaultProps = {
  value: '',
};

export default InputNumber;
