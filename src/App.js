import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchResults from './Components/SearchResults';
import FilterCategories from './Components/FilterCategories';
import './App.css';
import ShoppingCartButton from './Components/ShoppingCartButton';
import ShoppingCart from './Components/ShoppingCart';
import SearchBar from './Components/SearchBar';
import ProductDetail from './Components/ProductDetail';
import InicialMessage from './Components/InicialMessage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      search: '',
      cart: [],
    };
    this.getState = this.getState.bind(this);
    this.setCartStorage = this.setCartStorage.bind(this);
  }

  setCartStorage(obj) {
    this.setState((previousState) => ({
      cart: [...previousState.cart, obj],
    }));
    const { cart } = this.state;
    console.log(cart);
  }

  getState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { category, search, cart } = this.state;
    return (
      <div>
        <BrowserRouter>
          <ShoppingCartButton />
          <SearchBar getState={ this.getState } />
          <Switch>
            <Route exact path="/" component={ InicialMessage } />
            <Route
              exact
              path="/shopping-cart"
              render={ () => <ShoppingCart cart={ cart } /> }
            />
            <Route
              exact
              path="/search"
              render={ (props) => (
                <SearchResults
                  { ...props }
                  category={ category }
                  search={ search }
                  setCartStorage={ this.setCartStorage }
                />) }
            />
            <Route
              exact
              path="/details/:id"
              render={ (props) => (
                <ProductDetail
                  { ...props }
                  search={ search }
                  setCartStorage={ this.setCartStorage }
                />) }
            />
          </Switch>
          <FilterCategories getState={ this.getState } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
