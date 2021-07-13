import React from 'react';
import Proptype from 'prop-types';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { getCategories } = api;
    const categoriesAPI = await getCategories();
    this.setState({
      categories: categoriesAPI,
      loading: false,
    });
  }

  render() {
    const { handleCategoryText } = this.props;
    const { categories, loading } = this.state;
    if (loading) {
      return (
        <p>Loading...</p>
      );
    }
    return (
      <div>
        <ul>
          { categories.map((cat) => (
            <li
              key={ cat.id }
            >
              <input
                data-testid="category"
                type="button"
                id={ cat.id }
                value={ cat.name }
                onClick={ handleCategoryText }
              />
            </li>))}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  handleCategoryText: Proptype.func.isRequired,
};

export default CategoryList;
