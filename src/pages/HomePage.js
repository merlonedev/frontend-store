import React from 'react';
import SearchInput from '../components/SearchInput';
import Category from '../components/Category';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <aside>
          <Category />
        </aside>
      </div>
    );
  }
}

export default HomePage;
