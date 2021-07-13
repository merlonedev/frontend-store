import React, { Component } from 'react';
import CardList from '../components/CardList';
import SideBar from '../components/SideBar';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <SideBar />
        <CardList />
        <span className="main-message" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Main;
