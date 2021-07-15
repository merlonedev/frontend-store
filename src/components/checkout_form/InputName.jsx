import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenericInput from './GenericInput';

class InputName extends Component {
  nameCheck({ target }) {
    const { onChange } = this.props;
    onChange(target);
    const check = target.value.match(/(\s|[a-záãéêíóôõúç]|'){0,40}/gi)[0];
    target.value = check.toUpperCase();
  }

  render() {
    const { value, name } = this.props;

    return (
      <GenericInput
        dataTestid="checkout-fullname"
        placeholder="Nome Completo"
        name={ name }
        className="input-name"
        id="input-name"
        value={ value }
        onChange={ (e) => {
          this.nameCheck(e);
        } }
      />
    );
  }
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputName.defaultProps = {
  value: '',
};

export default InputName;
