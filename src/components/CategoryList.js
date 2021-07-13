import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

class CategoryList extends React.Component {
  render() {
    const { categories, handleClickCategory } = this.props;
    return (
      <div className="categoryList">
        { categories
          .map((category) => (
            <CategoryItem
              key={ category.id }
              category={ category }
              handleClickCategory={ handleClickCategory }
            />))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  handleClickCategory: PropTypes.func.isRequired,
};

export default CategoryList;
