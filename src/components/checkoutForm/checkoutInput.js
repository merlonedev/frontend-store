import React from 'react';
import PropTypes from 'prop-types';

class CheckoutInput extends React.Component {
  render() {
    const { labelId, type, textLabel, value, eventHandler, dataTest, name } = this.props;
    return (
      <label htmlFor={ labelId }>
        {textLabel}
        <input
          data-testid={ dataTest }
          type={ type }
          id={ labelId }
          value={ value }
          onChange={ eventHandler }
          name={ name }
          required
        />
      </label>
    );
  }
}

CheckoutInput.propTypes = {
  labelId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  textLabel: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CheckoutInput;
