import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../css/inputCheckout.css';

class InputCEP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: '',
    };
    this.cepCheck = this.cepCheck.bind(this);
    this.isNumber = this.isValid.bind(this);
  }

  cepCheck({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/\d{8}/);
    if (Array.isArray(check) && check.length) {
      target.value = check[0].replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
      console.log(target.value);
      onChange(target);
      return this.setState({ isOk: 'yes' });
    }
    this.setState({ isOk: 'not' });
  }

  isValid({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/\d{0,8}/)[0];
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
      <label htmlFor="input-cep">
        <input
          style={ { border: `2px solid ${color}` } }
          name={ name }
          className="input-cep"
          id="input-cep"
          value={ value }
          type="text"
          placeholder="CEP"
          onChange={ (e) => this.isValid(e) }
          onBlur={ (e) => {
            this.cepCheck(e);
          } }
          data-testid="checkout-cep"
        />
      </label>
    );
  }
}

InputCEP.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputCEP.defaultProps = {
  value: '',
};

export default InputCEP;
