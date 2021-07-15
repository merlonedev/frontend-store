import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenericInput from './GenericInput';

class InputCPF extends Component {
  cpfCheck({ target }) {
    const { onChange } = this.props;
    onChange(target);
    const check = target.value.match(/\d{0,11}/)[0];
    target.value = check;
  }

  render() {
    const { value, name } = this.props;

    return (
      <GenericInput
        dataTestid="checkout-cpf"
        placeholder="CPF"
        name={ name }
        className="input-cpf"
        id="input-cpf"
        value={ value }
        onChange={ (e) => {
          this.cpfCheck(e);
        } }
      />
    );
  }
}

InputCPF.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputCPF.defaultProps = {
  value: '',
};

export default InputCPF;
