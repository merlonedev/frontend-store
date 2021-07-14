import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import ButtonCart from '../Components/ButtonCart';

class Home extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     products: [],
  //     value: '',
  //   };
  // }

  render() {
    return (
      <section>
        <div>
          <SearchBar />
          <ButtonCart />
          <NavBar />
        </div>
      </section>
    );
  }
}

export default Home;
