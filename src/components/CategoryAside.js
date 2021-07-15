import React from 'react';
import PropTypes from 'prop-types';

import { CategoryList, CategoryItem } from '../styles/styledComponents';

class CategoryAside extends React.Component {
  render() {
    const { categoryObj, categoryAndQuery } = this.props;
    return (
      <CategoryList>
        {categoryObj.map(({ id, name }) => (
          <CategoryItem key={ id }>
            <button
              type="button"
              data-testid="category"
              onClick={ () => { categoryAndQuery(id); } }
            >
              { name }
            </button>
          </CategoryItem>))}
      </CategoryList>
    );
  }
}

CategoryAside.propTypes = {
  categoryObj: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryAndQuery: PropTypes.func.isRequired,
};

export default CategoryAside;
