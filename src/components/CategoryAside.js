import React from 'react';
import PropTypes from 'prop-types';

class CategoryAside extends React.Component {
  render() {
    const { categoryObj, categoryAndQuery } = this.props;
    return (
      <ul>
        {categoryObj.map(({ id, name }) => (
          <li key={ id }>
            <button
              type="button"
              data-testid="category"
              onClick={ () => { categoryAndQuery(id); } }
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
  categoryAndQuery: PropTypes.func.isRequired,
};

export default CategoryAside;
