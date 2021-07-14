import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [
        {
          id: 'MLB1659970653',
          title: 'Avião Bate Bate Com Som E Luz - Brinquedo Meninos',
          price: 39.9,
          currency_id: 'BRL',
          thumbnail: 'http://http2.mlstatic.com/D_660270-MLB46579103227_072021-O.jpg',
          quantity: 1,
        },
        {
          id: 'MLB1595925546',
          title: 'Avião Comercial Boeing 737 Gol Linhas Aéreas - Metal 15,5 Cm',
          price: 78.9,
          currency_id: 'BRL',
          thumbnail: 'http://http2.mlstatic.com/D_853433-MLB44094958683_112020-I.jpg',
          quantity: 1,
        },
        {
          id: 'MLB1305552209',
          title: 'Avião De Viagem Brinquedo Realista Com Som E Luzes Bbr Toys',
          price: 80.96,
          currency_id: 'BRL',
          thumbnail: 'http://http2.mlstatic.com/D_983265-MLB31990120909_082019-O.jpg',
          quantity: 1,
        },
      ],
    };
    this.removeItem = this.removeItem.bind(this);
    this.cartItemAddQuantity = this.cartItemAddQuantity.bind(this);
    this.cartItemDiminishQuantity = this.cartItemDiminishQuantity.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart() {
    // Funcao para adiciona itens para o carrinho - Luiz
  }

  cartItemAddQuantity(id) {
    const { cartList } = this.state;
    const selIndex = cartList.findIndex((item) => item.id === id);
    const selItem = cartList.find((item) => item.id === id);
    cartList[selIndex].quantity = selItem.quantity + 1;
    this.setState({ cartList });
  }

  cartItemDiminishQuantity(id) {
    const { cartList } = this.state;
    const selItem = cartList.find((item) => item.id === id);
    if (selItem.quantity <= 1) return null;
    const selIndex = cartList.findIndex((item) => item.id === id);
    cartList[selIndex].quantity = selItem.quantity - 1;
    this.setState({ cartList });
  }

  removeItem(id) {
    const { cartList } = this.state;
    const selIndex = cartList.findIndex((item) => item.id === id);
    cartList.splice(selIndex, 1);
    this.setState({ cartList });
  }

  render() {
    const { cartList } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Search addItemToCart={ this.addItemToCart } /> }
          />
          <Route
            exact
            path="/product-details/:categoryID/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<ShoppingCart
              cartItemAddQuantity={ this.cartItemAddQuantity }
              cartItemDiminishQuantity={ this.cartItemDiminishQuantity }
              removeItem={ this.removeItem }
              cartList={ cartList }
            />) }
          />
          {/* <Route
            path="/checkout"
            render={ (props) => <Checkout { ...props } /> }
          /> */}
        </Switch>
      </Router>
    );
  }
}

export default Home;
