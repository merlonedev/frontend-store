import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        { categories
          .map((category) => (
            <CategoryItem
              key={ category.id }
              category={ category }
            />))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
};

export default CategoryList;
