import React from 'react';
import getCategories from '../services/api';

class Home extends React.Component {
  componentDidMount() {
    getCategories();
    console.log(getCategories());
  }

  render() {
    return (
      <section>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
