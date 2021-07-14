import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { categories, handleLiClick } = this.props;
    return (
      <div>
        <ul>
          {categories.map(({ name, id }) => (
            <li
              key={ id }
            >
              <button
                data-testid="category"
                type="button"
                onClick={ () => handleLiClick(id) }
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.string,
}.isRequired;

export default Category;
