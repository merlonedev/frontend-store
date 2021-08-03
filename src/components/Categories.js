import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.handleState = this.handleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleState();
  }

  handleState() {
    getCategories().then((category) => this.setState({
      categories: [...category],
    }));
  }

  handleClick(e) {
    const categoryId = e.target.getAttribute('categoryid');
    const { getProductListByCategoryCallBack } = this.props;
    getProductListByCategoryCallBack(categoryId);
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) => (
          <li
            key={ category.id }
          >
            <button
              data-testid="category"
              categoryid={ category.id }
              type="button"
              onClick={ this.handleClick }
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

Categories.propTypes = {
  getProductListByCategoryCallBack: PropTypes.func.isRequired,
};

export default Categories;
