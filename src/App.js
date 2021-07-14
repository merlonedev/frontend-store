import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchAndResults from './Components/SearchAndResults';
import ShoppingCartButton from './Components/ShoppingCartButton';
import ShoppingCart from './Components/ShoppingCart';
import FilterCategories from './Components/FilterCategories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
    this.getCategory = this.getCategory.bind(this);
  }

  getCategory(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <BrowserRouter>
          <ShoppingCartButton />
          <div className="main">
            <FilterCategories getCategory={ this.getCategory } />
            <Switch>
              <Route
                exact
                path="/"
                render={ (props) => (
                  <SearchAndResults { ...props } category={ category } />) }
              />
              <Route path="/shopping-cart" component={ ShoppingCart } />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
