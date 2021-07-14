import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryRadioButton from './CategoryRadioButton';

class CategoryList extends Component {
  render() {
    const { categories, onChangeFilterCategory } = this.props;
    return (
      <div className="category">
        {categories
          .map((category, index) => (
            <CategoryRadioButton
              key={ index }
              category={ category }
              onChangeFilterCategory={ onChangeFilterCategory }
            />))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onChangeFilterCategory: PropTypes.func,
}.isRequired;

export default CategoryList;
