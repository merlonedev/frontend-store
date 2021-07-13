import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      id,
      type,
      name,
      value,
      handleChange,
      children,
    } = this.props;

    return (
      <div>
        <input
          type={ type }
          data-testid={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
        <label htmlFor={ id }>{ children }</label>
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  children: '',
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Input;
