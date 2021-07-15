import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Category extends Component {
  constructor() {
    super();
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
      categories: category,
    }));
  }

  handleClick(e) {
    const categoryid = e.target.getAttribute('categoryid');
    const categoryname = e.target.getAttribute('categoryname');
    const { callBack } = this.props;
    callBack(categoryid, categoryname);
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) => (
          <button
            type="button"
            key={ category.id }
            onClick={ this.handleClick }
          >
            <li
              data-testid="category"
              categoryid={ category.id }
              categoryname={ category.name }
            >
              {category.name}
            </li>
          </button>
        ))}
      </ul>
    );
  }
}

Category.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
  }).isRequired,
  callBack: PropTypes.func.isRequired,
};
