import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    const { categoryList } = this.props;
    console.log('NavBar', categoryList);
    return (
      <nav>
        <ul>
          {categoryList.map((category) => (
            <li key={ category.id } data-testid="category">
              { category.name }
            </li>))}
        </ul>
        {/* {categoryList.map((category) => (
          <input
            type="radio"
            key={ category.id }
            data-testid="category"
          >
            { category.name }
          </input>))
        } */}

      </nav>
    );
  }
}

NavBar.propTypes = {
  categoryList: PropTypes.arrayOf(Object).isRequired,
};

export default NavBar;
