import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends Component {
  render() {
    return (
      <Link to="/">
        <img src="https://img.icons8.com/ios/50/000000/back--v1.png" alt="voltar" className="back-image" />
      </Link>
    );
  }
}

export default HomeButton;
