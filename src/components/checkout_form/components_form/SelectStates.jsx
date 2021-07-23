import React, { Component } from 'react';
import PropTypes from 'prop-types';
import states from './optionsStates';

class SelectStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: '',
    };
    this.isValid = this.isValid.bind(this);
  }

  isValid({ target: { value } }) {
    if (value === 'Estado' || value === '') {
      return this.setState({ isOk: 'not' });
    }
    return this.setState({ isOk: 'yes' });
  }

  renderStates() {
    return states.map((state) => (
      <option className="state" value={ state } key={ state }>
        { state }
      </option>
    ));
  }

  render() {
    const { onChange, name, value } = this.props;
    const { isOk } = this.state;
    let color = '';
    if (isOk) {
      color = isOk === 'yes' ? 'lime' : 'red';
    }
    return (
      <label htmlFor="states">
        <select
          style={ { border: `2px solid ${color}` } }
          id="states"
          onChange={ onChange }
          onBlur={ this.isValid }
          name={ name }
          value={ value }
          className="input-select"
        >

          { this.renderStates() }

        </select>

      </label>
    );
  }
}

SelectStates.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectStates;
