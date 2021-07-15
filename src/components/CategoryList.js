import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.renderCategories = this.renderCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.renderCategories();
  }

  renderCategories() {
    getCategories()
      .then((response) => {
        this.setState({
          categories: response,
        });
      });
  }

  render() {
    const { categories } = this.state;
    const { clickFunction } = this.props;
    return (
      <ul>
        { categories.map((item) => (
          <li key={ item.id }>
            <label key={ item.id } htmlFor={ item.id }>
              <input
                type="radio"
                data-testid="category"
                key={ item.id }
                value={ item.id }
                name="1"
                id={ item.id }
                onClick={ clickFunction }
              />
              { item.name }
            </label>
          </li>
        )) }
      </ul>
    );
  }
}

CategoryList.propTypes = {
  clickFunction: PropTypes.func.isRequired,
};

export default CategoryList;
