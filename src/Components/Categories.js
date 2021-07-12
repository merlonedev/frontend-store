import React from 'react';

class Categories extends React.Component {
  render() {
    const { id, name } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { name }
          <input
            type="radio"
            value={ id }
            id={ name }
            name="category"
            data-testid="category"
          />
        </label>
      </div>
    );
  }
}

export default Categories;
