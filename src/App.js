import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartProduct from './components/CartProduct';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="carrinho" />
          </Link>
          <Switch>
            <Route exact path="/" component={ ProductList } />
            <Route path="/cart" component={ CartProduct } />
          </Switch>
        </BrowserRouter>
        <Categories />
      </div>
    );
  }
}

export default App;
