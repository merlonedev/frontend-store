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
      // isLoading: true,
    };
  }

  componentDidMount() {
    this.handleJonas();
  }

  async handleJonas() {
    const category = await api.getCategories();
    this.setState({
      categories: category,
      // isLoading: false,
    });
  }

  getFilterId(filter) {
    console.log(filter);
  }

  render() {
    const { categories, especifyProducts /* isLoading */ } = this.state;
    // if (isLoading) {
    //   return <span>Carregando</span>;
    // }
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={
                (props) => <Home { ...props } getEspecifyProducts={ this.getEspecifyProducts } />
              }
            />
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route
              exact
              path="/card/"
              render={ (props) => <Card { ...props }
              id={ especifyProducts }
            /> }
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
