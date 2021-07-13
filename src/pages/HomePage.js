import React from 'react';
import SearchInput from '../components/SearchInput';
import CartItems from '../components/CartItems';
import Category from '../components/Category';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <CartItems />
        <aside>
          <Category />
        </aside>
      </div>
    );
  }
}

export default HomePage;
