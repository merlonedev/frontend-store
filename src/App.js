import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItems from './pages/ListItems';
import CartItems from './pages/CartItems';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props); // usado como referencia lógica do código do Grupo 10 (source: https://github.com/tryber/sd-12-project-frontend-online-store/blob/main-group-10/src/App.js)
    this.state = {
      cartItems: [],
    };
    this.addToCartItems = this.addToCartItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    // this.loadState = this.loadState.bind(this);
    // this.saveState = this.saveState.bind(this);
  }

  // saveState() {
  //   localStorage.setItem('shopStates', JSON.stringify(this.state));
  // }

  // loadState() {
  //   const storage = JSON.parse(localStorage.getItem('shopStates'));
  //   this.setState({
  //     ...storage,
  //   });
  // }

  addToCartItems(newItem) {
    const { cartItems } = this.state;
    const isRepeated = cartItems.some((item) => item === newItem);
    if (!isRepeated) {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, newItem],
      }));
    }
  }

  removeItem(updateCart) {
    this.setState({
      cartItems: [...updateCart],
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={
              (props) => (<ListItems
                { ...props }
                addToCartItems={ this.addToCartItems }
                cartQtd={ cartItems.length }
              />)
            }
          />
          <Route
            path="/cart"
            exact
            render={
              (props) => (<CartItems
                { ...props }
                setItemCart={ cartItems }
                removeItem={ this.removeItem }
              />)
            }
          />
          <Route
            path="/item/:categoryId/:productId"
            render={ (props) => (<ProductDetails
              { ...props }
              cartQtd={ cartItems.length }
            />) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
