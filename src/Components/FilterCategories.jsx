import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import { Link } from 'react-router-dom';

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
    const { getState } = this.props;
    getState(name, id);
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        {
          categories.map((categorie) => (
            <Link
              to="/search"
              name="category"
              key={ categorie.id }
              id={ categorie.id }
              data-testid="category"
              onClick={ this.clickHandle }
            >
              { categorie.name }
            </Link>
          ))
        }
      </aside>
    );
  }
}

FilterCategories.propTypes = {
  getState: PropTypes.func.isRequired,
};

export default FilterCategories;
