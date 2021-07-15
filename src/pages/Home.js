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
      products: [],
      categories: [],
      value: '',
      productList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.mountCategorieList = this.mountCategorieList.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  async componentDidMount() {
    const result = await getCategories();
    this.mountCategorieList(result);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleClick(e) {
    const { target: { id, name } } = e;
    console.log('func', id);
    const { value } = this.state;
    const byCategorie = name === 'categorie' ? id : '';
    const bySearch = name === 'searchButton' ? value : '';

    const products = await getProductsFromCategoryAndQuery(byCategorie, bySearch);

    this.setState({
      products: products.results,
    });
  }

  mountCategorieList(categories) {
    this.setState({
      categories,
    });
  }

  addToCart(product) {
    console.log(product);
    this.setState((prevState) => ({
      productList: [...prevState.productList, product],
    }));
  }

  render() {
    const { products, value, categories, productList } = this.state;
    return (

      <section>
        <div>
          <SearchBar
            products={ products }
            value={ value }
            change={ this.handleChange }
            click={ this.handleClick }
          />
          <ButtonCart />
          <NavBar
            categories={ categories }
            click={ this.handleClick }
          />
          <ProductList
            products={ productList }
            addToCart={ this.addToCart }
          />
        </div>
      </section>
    );
  }
}

export default Home;
