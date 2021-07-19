import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../css/inputCheckout.css';

class InputComplement extends Component {
  constructor() {
    super();
    this.limitLength = this.limitLength.bind(this);
  }

  limitLength({ target }) {
    const { onChange } = this.props;
    const length = 50;
    if (target.value.length <= length) {
      onChange(target);
    }
  }

  render() {
    const { value, name } = this.props;
    return (
      <label htmlFor="input-complement">
        <input
          name={ name }
          className="input-checkout"
          id="input-complement"
          value={ value }
          type="text"
          placeholder="Complemento"
          onChange={ this.limitLength }
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
