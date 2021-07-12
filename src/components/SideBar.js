import React, { Component } from 'react';
import Loading from './Loading';

const API_URL = 'https://api.mercadolibre.com/sites/MLB/categories';

class SideBar extends Component {
  constructor() {
    super();

    this.fetchSideBar = this.fetchSideBar.bind(this);

    this.state = {
      categorias: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchSideBar();
  }

  fetchSideBar() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          categorias: data,
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
