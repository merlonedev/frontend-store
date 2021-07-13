import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-text">Carregando...</div>
        <div className="loading-logo" />
      </div>
    );
  }
}

export default Loading;
