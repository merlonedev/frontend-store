import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenericInput from './GenericInput';

class InputEmail extends Component {
  emailCheck({ target }) {
    const { onChange } = this.props;
    onChange(target);
    const check = target.value.match(/(\w|\d|\.|@|-){0,50}/gi)[0];
    target.value = check.toLowerCase();
  }

  render() {
    const { value, name } = this.props;

    return (
      <GenericInput
        dataTestid="checkout-email"
        placeholder="Email"
        name={ name }
        className="input-email"
        id="input-email"
        value={ value }
        onChange={ (e) => {
          this.emailCheck(e);
        } }
      />
    );
  }
}

InputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputEmail.defaultProps = {
  value: '',
};

export default InputEmail;
