import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: '',
    };
    this.cityCheck = this.cityCheck.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  cityCheck({ target }) {
    const { onChange } = this.props;
    const check = target.value.match(/(\s|[a-záãéêíóôõúç]|'){0,40}/gi)[0];
    target.value = check;
    onChange(target);
  }

  isValid({ target: { value } }) {
    const length = 2;
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
      <label htmlFor="input-city">
        <input
          style={ { border: `2px solid ${color}` } }
          name={ name }
          className="input-city"
          id="input-city"
          value={ value }
          type="text"
          placeholder="Cidade"
          onChange={ (e) => {
            this.cityCheck(e);
          } }
          onBlur={ (e) => {
            this.isValid(e);
          } }
        />
      </label>
    );
  }
}

InputCity.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputCity.defaultProps = {
  value: '',
};

export default InputCity;
