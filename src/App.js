import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Index from './components/Index';
import Cart from './components/ShoppingCart';
import Infos from './components/Infos';
import './App.css';

// Renderiza pagina de acordo com o que possuir após o / .
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemCart: [],
      count: 0,
    };
    this.addToCartItem = this.addToCartItem.bind(this);
    this.countItemCart = this.countItemCart.bind(this);
    this.resgateCount = this.resgateCount.bind(this);
  }

  // Consegui esse requisito com ajuda do Inácio da turma 11
  // Essa função vai adicionar o item no state itemCart, verificando se ele existe repetido ou não
  // Caso ele seja repetido ele vai apenas aumentar a quantidade do produto.

  componentDidMount() {
    const { count, itemCart } = this.state;
    this.resgateCount(count, itemCart);
  }

  resgateCount({ count }) {
    if (count !== 0) {
      const arrCartStorage = localStorage.getItem('item');
      this.setState({
        count: localStorage.getItem('count') * 1,
        itemCart: JSON.parse(arrCartStorage) || [],
      });
    }
  }

  addToCartItem(item) {
    this.countItemCart();
    this.setState(({ itemCart }) => {
      const index = itemCart.findIndex(({ id }) => id === item.id);
      item.quantity = 1;
      if (index < 0) {
        return { itemCart: [...itemCart, item] };
      }
      const newcart = JSON.parse(JSON.stringify(itemCart));
      newcart[index].quantity += 1;
      return { itemCart: newcart };
    });
  }

  countItemCart() {
    this.setState((state) => ({
      count: state.count + 1 }));
  }

  render() {
    const { itemCart, count } = this.state;
    if (itemCart.length > 0) {
      localStorage.setItem('item', JSON.stringify(itemCart));
      localStorage.setItem('count', count);
    }

    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Switch>
          <Route
            path="/infos/:id/:product"
            render={ (props) => (<Infos
              { ...props }
              count={ count }
              addToCartItem={ this.addToCartItem }
            />) }
          />
          <Route path="/cart" render={ () => <Cart itemCart={ itemCart } /> } />
          <Route
            path="/"
            render={ () => (<Index
              addCartItem={ this.addToCartItem }
              count={ count }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
