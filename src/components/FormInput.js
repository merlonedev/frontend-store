import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  render() {
    const { id, value, onChange, text } = this.props;
    return (
      <section>
        <label htmlFor={ id } data-testid={ `checkout-${id}` }>
          { text }
          <input
            type="text"
            id={ id }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;