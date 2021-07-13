import React from 'react';
import PropTypes from 'prop-types';

class DataInput extends React.Component {
  render() {
    const {
      label,
      inputName,
      inputType,
      inputID,
    } = this.props;

    return (
      <label htmlFor={ `${inputID}` } data-testid={ `checkout-${inputID}` }>
        { label }
        <input
          name={ inputName }
          type={ inputType }
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
  inputID: PropTypes.string.isRequired,
};

export default DataInput;
