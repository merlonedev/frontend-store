import React from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends React.Component {
  render() {
    const { category, handleClickCategory } = this.props;
    return (
      <button
        type="button"
        onClick={ handleClickCategory }
      >
        <div
          id={ category.id }
          className="categoryItem"
          data-testid="category"
        >
          { `${category.name}` }
        </div>
      </button>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
  handleClickCategory: PropTypes.func.isRequired,
};

export default CategoryItem;
