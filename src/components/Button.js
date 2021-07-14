import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      title,
      onClick,
      className,
      labelValue,
      name,
      dataTestId,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { labelValue }
        <button
          name={ name }
          className={ className }
          type="button"
          onClick={ onClick }
          data-testid={ dataTestId }
        >
          { title }
        </button>
      </label>
    );
  }
}

Button.defaultProps = {
  labelValue: '',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  labelValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Button;
