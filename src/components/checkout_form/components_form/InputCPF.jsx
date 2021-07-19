import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../css/inputCheckout.css';

class InputCPF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: '',
    };
    this.cpfCheck = this.cpfCheck.bind(this);
    this.isNumber = this.isNumber.bind(this);
  }

  cpfCheck({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/\d{11}/);
    if (Array.isArray(check) && check.length) {
      target.value = check[0].replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      onChange(target);
      return this.setState({ isOk: 'yes' });
    }
    this.setState({ isOk: 'not' });
  }

  isNumber({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/\d{0,11}/)[0];
    target.value = check || '';
    onChange(target);
  }

  render() {
    const { value, name } = this.props;
    const { isOk } = this.state;
    let color = '';
    if (isOk) {
      color = isOk === 'yes' ? 'lime' : 'red';
    }
    return (
      <label htmlFor="input-cpf">
        <input
          style={ { border: `2px solid ${color}` } }
          name={ name }
          className="input-cpf"
          id="input-cpf"
          value={ value }
          type="text"
          placeholder="CPF"
          onChange={ (e) => this.isNumber(e) }
          onBlur={ (e) => {
            this.cpfCheck(e);
          } }
          data-testid="checkout-cpf"
        />
      </label>
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
