import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Payment from './pages/Payment';
import './App.css';
import { getCategories } from './services/api';
import ItemDetails from './pages/ItemDetails';


class App extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: '',
    };
    this.getValue = this.getValue.bind(this);
  }

  getValue(value) {
    this.setState({
      valueInput: value,
    });
    return value;
  }

  render() {
    const { valueInput } = this.state;
    return (
      <BrowserRouter>
        <SearchBar
          getValue={ this.getValue }
        />
        <Route
          exact
          path="/"
          render={ () => <Main value={ valueInput } /> }
        />
        <Route
          path="/details/:id"
          render={ (props) => <ItemDetails { ...props } /> }
        />
        <Route exact path="/Cart" component={ Cart } />
        <Route exact path="/Payment" component={ Payment } />
      </BrowserRouter>
    );
  }
}

export default App;
