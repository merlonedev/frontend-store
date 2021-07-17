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
      cartList: [],
    };
    this.getState = this.getState.bind(this);
    this.setCartStorage = this.setCartStorage.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  setCartStorage(obj) {
    const { id } = obj;
    const { cartList } = this.state;
    const includes = cartList.find((item) => item.id === id);
    if (includes) return this.setQuantity(includes.quantity + 1, id);
    obj.quantity = 1;
    this.setState((prevState) => ({ cartList: [...prevState.cartList, obj] }));
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

  removeItem(idItem) {
    this.setState((prev) => {
      const clearList = prev.cartList.filter(({ id }) => id !== idItem);
      return { cartList: clearList };
    });
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
// Na implementação do requisito 10 utilizamos a ideia e o código do Grupo 10 da turma 12. Segue link para o repositório https://github.com/tryber/sd-12-project-frontend-online-store/tree/main-group-10/src
