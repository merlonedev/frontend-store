import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class FilterCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.getApi = this.getApi.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const response = await api.getCategories();
    this.setState({
      categories: response,
    });
  }

  clickHandle({ target: { name, id } }) {
    const { getCategory } = this.props;
    getCategory(name, id);
  }
  
  render() {
    const { categories } = this.state;
    return (
      <aside>
        {
          categories.map((categorie) => (
            <button
              type="button"
              name="category"
              key={ categorie.id }
              id={ categorie.id }
              data-testid="category"
              onClick={ this.clickHandle }
            >
              { categorie.name }
            </button>
          ))
        }
      </aside>
    );
  }
}

FilterCategories.propTypes = {
  getCategory: PropTypes.func.isRequired,
};

export default FilterCategories;
