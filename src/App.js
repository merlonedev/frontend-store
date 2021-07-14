import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    };
    this.addToCartItem = this.addToCartItem.bind(this);
  }

  // Consegui esse requisito com ajuda do Inácio da turma 11
  // Essa função vai adicionar o item no state itemCart, verificando se ele existe repetido ou não
  // Caso ele seja repetido ele vai apenas aumentar a quantidade do produto.
  addToCartItem(item) {
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

  render() {
    const { itemCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/infos/:id/:product"
            render={ (props) => (<Infos
              { ...props }
              addToCartItem={ this.addToCartItem }
            />) }
          />
          <Route path="/cart" render={ () => <Cart itemCart={ itemCart } /> } />
          <Route path="/" render={ () => <Index addCartItem={ this.addToCartItem } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
