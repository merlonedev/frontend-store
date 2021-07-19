import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../css/inputCheckout.css';

class InputPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: '',
    };
    this.cpfCheck = this.phoneCheck.bind(this);
    this.isNumber = this.isValid.bind(this);
  }

  phoneCheck({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/\d{10,11}/);
    if (Array.isArray(check) && check.length) {
      target.value = check[0].replace(/(\d{2})(\d)?(\d{4})(\d{4})/, '($1)$2$3-$4');
      console.log(target.value);
      onChange(target);
      return this.setState({ isOk: 'yes' });
    }
    this.setState({ isOk: 'not' });
  }

  isValid({ target }) {
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
      <label htmlFor="input-phone">
        <input
          style={ { border: `2px solid ${color}` } }
          name={ name }
          className="input-phone"
          id="input-phone"
          value={ value }
          type="text"
          placeholder="Telefone"
          onChange={ (e) => this.isValid(e) }
          onBlur={ (e) => {
            this.phoneCheck(e);
          } }
          data-testid="checkout-phone"
        />
      </label>
    );
  }
}

InputPhone.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputPhone.defaultProps = {
  value: '',
};

export default InputPhone;
