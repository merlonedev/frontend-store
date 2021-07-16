import React from 'react';
import PropTypes from 'prop-types';

class CheckInput extends React.Component {
  render() {
    const { id, value, onChange, text } = this.props;
    return (
      <section>
        <label htmlFor={ id } data-testid={ `checkout-${id}` }>
          { text }
          <input
            type="checkbox"
            id={ id }
            checked={ value }
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

CheckInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckInput;
