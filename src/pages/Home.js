import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section>
        <label htmlFor="message" data-testid="home-initial-message">
          <input
            type="search"
            id="message"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </section>
    );
  }
}

export default Home;
