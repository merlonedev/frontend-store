import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { category, checked, onChange } = this.props;
    const { id, name } = category;

    return (
      <li className="category" data-testid="category">
        <label htmlFor={ id }>
          <input
            type="radio"
            value={ id }
            id={ id }
            className="category-radio"
            checked={ checked === id }
            onChange={ onChange }
          />
          { name }
        </label>
      </li>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Category;
