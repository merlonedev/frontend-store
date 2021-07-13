import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import * as api from './services/api';
import Home from './pages/Home';
// import Categories from './Components/Categories';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.handleJonas = this.handleJonas.bind(this);

  //   this.state = {
  //     categories: [],
  //     // isLoading: true,
  //   };
  // }

  // componentDidMount() {
  //   this.handleJonas();
  // }

  // async handleJonas() {
  //   const category = await api.getCategories();
  //   this.setState({
  //     categories: category,
  //     // isLoading: false,
  //   });
  // }

  // getFilterId(filter) {
  //   console.log(filter);
  // }

  render() {
    // const { categories /* isLoading */ } = this.state;
    // if (isLoading) {
    //   return <span>Carregando</span>;
    // }
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
        {/* <div className="categories">
          { categories.map((category) => (<Categories
            key={ category.id }
            name={ category.name }
            id={ category.id }
            getFilterId={ this.getFilterId }
          />)) }
        </div> */}
      </div>
    );
  }
}

export default App;
