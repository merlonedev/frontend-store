import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../css/inputCheckout.css';

class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: '',
    };
    this.nameCheck = this.nameCheck.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  nameCheck({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/(\s|[a-záãéêíóôõúç]|'){0,40}/gi)[0];
    target.value = check;
    onChange(target);
  }

  isValid({ target: { value } }) {
    const length = 6;
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
      <label htmlFor="input-name">
        <input
          style={ { border: `2px solid ${color}` } }
          name={ name }
          className="input-checkout"
          id="input-name"
          value={ value }
          type="text"
          placeholder="Nome Completo"
          onChange={ (e) => {
            this.nameCheck(e);
          } }
          onBlur={ (e) => {
            this.isValid(e);
          } }
          data-testid="checkout-fullname"
        />
      </label>
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
