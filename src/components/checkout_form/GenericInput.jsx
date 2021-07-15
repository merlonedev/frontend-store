import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericInput extends Component {
  render() {
    const {
      title,
      name,
      className,
      id,
      value,
      type,
      placeholder,
      onChange,
      onBlur,
      dataTestid,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { title }
        <input
          name={ name }
          className={ className }
          id={ id }
          value={ value }
          type={ type }
          placeholder={ placeholder }
          onChange={ onChange }
          onBlur={ onBlur }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

GenericInput.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  dataTestid: PropTypes.string,
};

GenericInput.defaultProps = {
  title: '',
  value: '',
  type: 'text',
  placeholder: '',
  className: '',
  onChange: () => {},
  onBlur: () => {},
  dataTestid: '',
};

export default GenericInput;
