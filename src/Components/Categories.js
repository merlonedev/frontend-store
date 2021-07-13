import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { id, name, getFilterId } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { name }
          <input
            type="radio"
            value={ id }
            id={ name }
            name="category"
            onChange={ getFilterId }
            data-testid="category"
          />
        </label>
      </div>
    );
  }
}

Categories.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  getFilterId: PropTypes.func.isRequired,
};

export default Categories;
