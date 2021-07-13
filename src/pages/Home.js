import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';

class Home extends Component {
  render() {
    return (
      <section>
        <div>
          <SearchBar />
          <NavBar />
        </div>
      </section>
    );
  }
}

export default Home;
