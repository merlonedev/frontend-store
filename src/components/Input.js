import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type,
      placeholder,
      id,
      value,
      name,
      onChange,
      onClick,
      labelTxt,
      className } = this.props;

    return (
      <label htmlFor={ id }>
        { labelTxt }
        <input
          type={ type }
          placeholder={ placeholder }
          id={ id }
          value={ value }
          name={ name }
          onChange={ onChange }
          onClick={ onClick }
          className={ className }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string]),
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func]),
  labelTxt: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  labelTxt: '',
  className: 'inputClass',
  onChange: () => {},
  onClick: () => {},
};

export default Input;
