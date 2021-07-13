import React from 'react';
import PropTypes from 'prop-types';

class DataInput extends React.Component {
  render() {
    const {
      label,
      inputName,
      inputType,
      inputValue,
      onChangeInput,
      inputID,
    } = this.props;

    return (
      <label htmlFor={ `${inputID}` } data-testid={ `checkout-${inputID}` }>
        { label }
        <input
          name={ inputName }
          type={ inputType }
          value={ inputValue }
          onChange={ onChangeInput }
          data-testid={ inputID }
        />
      </label>
    );
  }
}

DataInput.propTypes = {
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.node.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
};

export default DataInput;
