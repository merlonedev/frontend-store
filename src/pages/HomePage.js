import React from 'react';
import SearchInput from '../components/SearchInput';
import CartItems from '../components/CartItems';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <CartItems />
      </div>
    );
  }
}

export default HomePage;
