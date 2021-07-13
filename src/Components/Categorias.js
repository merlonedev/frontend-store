import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { category, categoryAndQuery } = this.props;
    return (
      <div>
        <h4>
          Categorias:
        </h4>
        <ul>
          {
            category.map(({ id, name }) => (
              <li key={ id }>
                <button
                  type="button"
                  data-testid="category"
                  onClick={ () => categoryAndQuery(id) }
                >
                  {name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object),
  categoryAndQuery: PropTypes.func,
};

Category.defaultProps = {
  category: [{}],
  categoryAndQuery: () => {},
};

export default Category;
