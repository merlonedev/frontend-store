import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import './App.css';
import NavBar from './Components/NavBar';
import ProductDetails from './Components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/Cart" component={ Cart } />
              <Route
                path="/product-detail/:categoryId/:id"
                render={ (props) => <ProductDetails { ...props } /> }
              />
              <Route path="/" component={ Home } exact />
              <Route path="/ProductDetails" component={ ProductDetails } />
            </Switch>
          </BrowserRouter>
          <NavBar />
        </div>
      </main>
    );
  }
}
export default App;
