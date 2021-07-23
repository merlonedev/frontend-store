import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: '',
    };
    this.addressCheck = this.addressCheck.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  addressCheck({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/(\s|[a-záãéêíóôõúç\d]|'){0,200}/gi)[0];
    target.value = check;
    onChange(target);
  }

  isValid({ target: { value } }) {
    const length = 5;
    if (value.length > length) {
      return this.setState({ isOk: 'yes' });
    }
    return this.setState({ isOk: 'not' });
  }

  render() {
    const { value, name } = this.props;
    const { isOk } = this.state;
    let color = '';
    if (isOk) {
      color = isOk === 'yes' ? 'lime' : 'red';
    }
    return (
      <label htmlFor="input-address">
        <input
          style={ { border: `2px solid ${color}` } }
          name={ name }
          className="input-checkout"
          id="input-address"
          value={ value }
          type="text"
          placeholder="Endereço"
          onChange={ (e) => {
            this.addressCheck(e);
          } }
          onBlur={ (e) => {
            this.isValid(e);
          } }
          data-testid="checkout-address"
        />
      </label>
    );
  }
}

InputAddress.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputAddress.defaultProps = {
  value: '',
};

export default InputAddress;
