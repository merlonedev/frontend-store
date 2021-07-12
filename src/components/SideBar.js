import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../services/api';
import './SideBar.css';

class SideBar extends Component {
  constructor() {
    super();

    this.renderCategories = this.renderCategories.bind(this);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.renderCategories();
  }

  renderCategories() {
    api.getCategories()
      .then((response) => {
        this.setState({
          categories: response,
          loading: false,
        });
      });
  }

  render() {
    const { loading, categories } = this.state;
    return (
      <aside className="categories">
        {loading && <Loading />}
        <ul className="categories-list">
          {
            categories.map((categoria) => (
              <li
                className="categories-item"
                data-testid="category"
                key={ categoria.id }
              >
                { categoria.name }
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}

export default SideBar;
