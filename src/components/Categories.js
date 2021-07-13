import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    api.getCategories().then((response) => {
      this.setState({
        categories: [...response],
        loading: false,
      });
    });
  }

  render() {
    const { categories, loading } = this.state;

    if (loading) {
      return (<aside><span>Carregando</span></aside>);
    }
    return (
      <aside>
        <ol>
          { categories.map((category) => (
            <li
              data-testid="category"
              key={ category.id }
            >
              { category.name }
            </li>))}
        </ol>
      </aside>
    );
  }
}

export default Categories;
