import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  constructor() {
    super();
    this.limitLength = this.limitLength.bind(this);
  }

  limitLength({ target }) {
    const { onChange } = this.props;
    const length = 5;
    if (target.value.length <= length) {
      onChange(target);
    }
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
          onChange={ this.limitLength }
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
