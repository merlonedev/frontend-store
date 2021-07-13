import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import ButtonCart from '../Components/ButtonCart';

class Home extends Component {
  render() {
    return (
      <section>
        <div>
          <SearchBar />
          <ButtonCart />
        </div>
      </section>
    );
  }
}

export default Home;
