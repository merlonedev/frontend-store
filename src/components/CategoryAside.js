import React from 'react';
import PropTypes from 'prop-types';

class CategoryAside extends React.Component {
  render() {
    const { categoryObj, handleCategory } = this.props;
    return (
      <ul>
        {categoryObj.map(({ id, name }) => (
          <li key={ id }>
            <button
              type="button"
              data-testid="category"
              onClick={ () => { handleCategory(id); } }
            >
              { name }
            </button>
          </li>))}
      </ul>
    );
  }
}

CategoryAside.propTypes = {
  categoryObj: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default CategoryAside;
