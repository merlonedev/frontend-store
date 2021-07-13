import React from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div
        className={ `categoryItem ${category.id}` }
        data-testid="category"
      >
        { `${category.name}` }
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CategoryItem;
