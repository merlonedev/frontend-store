import React from 'react';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        {api.getCategories().then((categories) => console.log(categories))}
      </>
    );
  }
}

export default App;
