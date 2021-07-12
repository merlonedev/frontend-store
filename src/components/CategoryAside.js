import React from 'react';
import PropTypes from 'prop-types';

class CategoryAside extends React.Component {
  render() {
    const { categoryObj } = this.props;
    return (
      <ol>
        {categoryObj.map((category) => <li key={ category.id }>{ category.name }</li>)}
      </ol>
    );
  }
}

CategoryAside.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CategoryAside;
