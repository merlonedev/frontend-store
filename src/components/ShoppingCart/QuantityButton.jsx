import React from 'react';
import PropTypes from 'prop-types';

class QuantityButton extends React.Component {
  render() {
    const { text, testId, changeQuant, quantity } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ changeQuant }
          data-testid={ testId }
          disabled={ quantity < 2 }
        >
          { text }
        </button>
      </div>
    );
  }
}

QuantityButton.propTypes = {
  text: PropTypes.string,
  handleQuantity: PropTypes.func,
  testId: PropTypes.string,
  quantity: PropTypes.number,
}.isRequired;

export default QuantityButton;
