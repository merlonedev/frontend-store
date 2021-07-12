import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../services/api';

class SideBar extends Component {
  constructor() {
    super();

    this.renderCategories = this.renderCategories.bind(this);

    this.state = {
      categorias: [],
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
          categorias: response,
          loading: false,
        });
      });
  }

  render() {
    const { loading, categorias } = this.state;
    return (
      <aside>
        {loading && <Loading />}
        <ul>
          {
            categorias.map((categoria) => (
              <li
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
