import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import List from './Components/List';
import Categories from './Components/Categories';

class App extends React.Component {
  constructor() {
    super();

    this.handleJonas = this.handleJonas.bind(this);

    this.state = {
      categories: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.handleJonas();
  }

  async handleJonas() {
    const category = await api.getCategories();
    this.setState({
      categories: category,
      isLoading: false,
    });
  }

  render() {
    const { categories, isLoading } = this.state;
    if (isLoading) {
      return <p>Carregando</p>;
    }
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ List } />
          </Switch>
        </BrowserRouter>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="categories">
          { categories.map((category) => (<Categories
            key={ category.id }
            name={ category.name }
            id={ category.id }
          />)) }
        </div>
      </div>
    );
  }
}

export default App;
