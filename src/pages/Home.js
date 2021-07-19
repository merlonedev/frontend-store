import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setOptionsCategories = this.setOptionsCategories.bind(this);
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
    const { getProducts } = this.props;
    const byCategorie = name === 'categorie' ? id : '';
    const bySearch = name === 'searchButton' ? search : '';

    const products = await getProductsFromCategoryAndQuery(byCategorie, bySearch);

    this.setState({
      products: products.results,
    }, () => getProducts(products.results));
  }

  setOptionsCategories(categories) {
    this.setState({
      categories,
    });
  }

  render() {
    const { products, search, categories, shoppingCart } = this.state;
    const { addToShoppingCart } = this.props;
    return (

      <section>
        <div>
          <ProductList
            products={ products }
            addToShoppingCart={ addToShoppingCart }
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

Home.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
};
