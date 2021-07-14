import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import Home from './pages/Home';
import Categories from './Components/Categories';
import ShoppingCart from './Components/ShoppingCart';
import ShoppingCartLink from './ShoppingCartLink';
import Card from './pages/Card';

class App extends React.Component {
  constructor() {
    super();

    this.handleJonas = this.handleJonas.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleJonas();
  }

  async handleJonas() {
    const category = await api.getCategories();
    this.setState({
      categories: category,
    });
  }

  getFilterId(filter) {
    console.log(filter);
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={
                (props) => (
                  <Home
                    { ...props }
                  />)
              }
            />
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route
              exact
              path="/card/"
              render={ (props) => (
                <Card
                  { ...props }
                />) }
            />
          </Switch>
          <ShoppingCartLink />
        </BrowserRouter>
        <div className="categories">
          { categories.map((category) => (<Categories
            key={ category.id }
            name={ category.name }
            id={ category.id }
            getFilterId={ this.getFilterId }
          />
          )) }
        </div>
      </div>
    );
  }
}

export default App;
