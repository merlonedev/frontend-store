import React from 'react';
import PropTypes from 'prop-types';
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
      <div className="bloco-aside">
        <aside className="aside">
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
      </div>
    );
  }
}

export default FilterCategories;

FilterCategories.propTypes = {
  onClick: PropTypes.func.isRequired,
};
