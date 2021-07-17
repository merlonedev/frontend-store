import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RemoveButton extends Component {
  render() {
    const { removeItem, id } = this.props;
    return (
      <button
        type="button"
        onClick={ () => removeItem(id) }
      >
        X
      </button>
    );
  }
}

RemoveButton.propTypes = {
  removeItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default RemoveButton;
