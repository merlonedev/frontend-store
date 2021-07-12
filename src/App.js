import React from 'react';
import Index from './components/Index';
import Categories from './components/categoriesList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Index />
        <Categories />
      </div>
    );
  }
}
export default App;
