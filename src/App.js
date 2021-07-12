import React from 'react';
import './App.css';
<<<<<<< HEAD
import { getCategories } from './services/api';

class App extends React.Component {
  render() {
    getCategories()
  }
=======
import * as api from './services/api';

function App() {
  api.getCategories();
  return (
    <div className="App">Grupo 29</div>
  );
>>>>>>> 743133ff1ed1140c306d6861f30cb87ffd5dd27e
}

export default App;
