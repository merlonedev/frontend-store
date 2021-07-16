import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import ButtonCart from '../Components/ButtonCart';
import ProductList from '../Components/ProductList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [], // são os produtos da página home, por categoria e por pesquisa
      categories: [], // o que é usado para fazer os bostões de pequisa de categoria
      search: '', // é o valor  é usado para o fetch por pesquisa por nome
      shoppingCart: [], // lista dos produtos comprados
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setOptionsCategories = this.setOptionsCategories.bind(this);
    this.addToShoppingCart = this.addToShoppingCart.bind(this);
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setOptionsCategories(result);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value,
    });
  }

  async handleClick(e) {
    const { target: { id, name } } = e;
    const { search } = this.state;
    const byCategorie = name === 'categorie' ? id : '';
    const bySearch = name === 'searchButton' ? search : '';

    const products = await getProductsFromCategoryAndQuery(byCategorie, bySearch);

    this.setState({
      products: products.results,
    });
  }

  setOptionsCategories(categories) {
    this.setState({
      categories,
    });
  }

  addToShoppingCart({ target: { id } }) {
    const { products } = this.state;
    console.log('Clicou');
    const product = products.find((e) => e.id === id);
    this.setState((prevState) => ({
      shoppingCart: [...prevState.shoppingCart, product],
    }));
  }

  render() {
    const { products, search, categories, shoppingCart } = this.state;
    return (

      <section>
        <div>
          <ProductList
            products={ products }
            addToShoppingCart={ this.addToShoppingCart }
          />
          <SearchBar
            products={ products }
            value={ search }
            change={ this.handleChange }
            click={ this.handleClick }
          />
          <ButtonCart shoppingCart={ shoppingCart } />
          <NavBar
            categories={ categories }
            click={ this.handleClick }
          />
        </div>
      </section>
    );
  }
}

export default Home;
