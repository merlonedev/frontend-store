import React from 'react';
import * as api from '../services/api';

class FilterCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.getApi = this.getApi.bind(this);
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

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    return (
      <aside>
        {
          categories.map((categorie) => (
            <button
              onClick={ onClick }
              type="button"
              key={ categorie.id }
              value={ categorie.id }
              data-testid="category"
            >
              { categorie.name }
            </button>
          ))
        }
      </aside>
    );
  }
}

export default FilterCategories;
