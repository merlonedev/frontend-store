import React, { Component } from 'react';

class InicialMessage extends Component {
  render() {
    return (
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }
}

export default InicialMessage;
