import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchResults from './Components/SearchResults';
import FilterCategories from './Components/FilterCategories';
import ShoppingCartButton from './Components/ShoppingCartButton';
import ShoppingCart from './Components/ShoppingCart';
import SearchBar from './Components/SearchBar';
import InicialMessage from './Components/InicialMessage';
import ProductDetail from './Components/ProductDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      search: '',
      itemList: [],
      cartList: [],
    };
    this.getState = this.getState.bind(this);
    this.setCartStorage = this.setCartStorage.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  setCartStorage(obj) {
    this.setState((previousState) => ({
      itemList: [...previousState.itemList, obj],
    }), () => this.addQuantity());
  }

  getState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  setQuantity(quantity, id) {
    this.setState((prev) => {
      const cartList = prev.cartList.map((item) => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
      return { cartList };
    });
  }

  addQuantity() {
    const { itemList } = this.state;
    const cartList = itemList.reduce((list, item) => {
      const includes = list.some(({ id }) => item.id === id);
      if (includes) return list;
      item.quantity = itemList.filter(({ id }) => id === item.id).length;
      return [...list, item];
    }, []);
    this.setState({ cartList });
  }

  removeItem(idItem) {
    this.setState((prev) => {
      const clearList = prev.itemList.filter(({ id }) => id !== idItem);
      return { itemList: clearList };
    }, () => this.addQuantity());
  }

  render() {
    const { category, search, cartList } = this.state;
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
              render={ () => (<ShoppingCart
                cartList={ cartList }
                removeItem={ this.removeItem }
                setQuantity={ this.setQuantity }
              />) }
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

// Na refatoração realizada nesse código depois do requisito 6 consultei o repositório do Roberval Filho da Turma 12 Grupo 18. Lembrando que os testes do 1 ao 6 já estavam passando antes dessa refatoração. https://github.com/tryber/sd-12-project-frontend-online-store/pull/226/files
