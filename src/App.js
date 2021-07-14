import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchResults from './Components/SearchResults';
import FilterCategories from './Components/FilterCategories';
import ShoppingCartButton from './Components/ShoppingCartButton';
import ShoppingCart from './Components/ShoppingCart';
import SearchBar from './Components/SearchBar';
import InicialMessage from './Components/InicialMessage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      search: '',
    };
    this.getState = this.getState.bind(this);
  }

  getState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { category, search } = this.state;
    return (
      <div>
        <BrowserRouter>
          <ShoppingCartButton />
          <SearchBar getState={ this.getState } />
          <Switch>
            <Route exact path="/" component={ InicialMessage } />
            <Route
              path="/search"
              render={ (props) => (
                <SearchResults
                  { ...props }
                  category={ category }
                  search={ search }
                />) }
            />
            <Route path="/shopping-cart" component={ ShoppingCart } />
          </Switch>
          <FilterCategories getState={ this.getState } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
