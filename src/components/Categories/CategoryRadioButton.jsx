import React, { Component } from 'react';
import propTypes from 'prop-types';

class CategoryRadioButton extends Component {
  render() {
    const { category, onChangeFilterCategory } = this.props;
    const { name, id } = category;
    return (
      <label htmlFor={ id }>
        <input
          onChange={ onChangeFilterCategory }
          value={ id }
          name="category"
          id={ id }
          type="radio"
          data-testid="category"
        />
        { name }
      </label>
    );
  }
}

CategoryRadioButton.propTypes = {
  category: propTypes.objectOf(propTypes.string),
  name: propTypes.string,
  id: propTypes.string,
}.isRequired;

export default CategoryRadioButton;
