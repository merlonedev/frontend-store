import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: '',
    };
    this.emailCheck = this.emailCheck.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  emailCheck({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/(\w|\d|\.|@|-){0,50}/gi)[0];
    target.value = check.toLowerCase();
    onChange(target);
  }

  isValid({ target: { value } }) {
    const length = 7;
    const check = /\b[a-z]+(\.|-|\w|\d)*?@[a-z]+\.[a-z]{2,3}(\.br)?$/i.test(value);
    if (check && value.length > length) {
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
      <label htmlFor="input-email">
        <input
          style={ { border: `2px solid ${color}` } }
          name={ name }
          className="input-checkout"
          id="input-email"
          value={ value }
          type="text"
          placeholder="Email"
          onChange={ (e) => {
            this.emailCheck(e);
          } }
          onBlur={ (e) => {
            this.isValid(e);
          } }
          data-testid="checkout-email"
        />
      </label>
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
