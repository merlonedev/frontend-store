import React, { Component } from 'react';

class SearchMsg extends Component {
  render() {
    return (
      <section>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </section>
    );
  }
}

export default SearchMsg;
