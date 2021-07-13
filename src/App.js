import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Payment from './pages/Payment';
import './App.css';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Route exact path="/" component={ Main } />
      <Route
        path="/details/:query/:id"
        render={ (props) => <ItemDetails { ...props } /> }
      />
      <Route exact path="/Cart" component={ Cart } />
      <Route exact path="/Payment" component={ Payment } />
    </BrowserRouter>
  );
}

export default App;
