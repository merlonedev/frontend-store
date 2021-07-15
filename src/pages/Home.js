import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import ButtonCart from '../Components/ButtonCart';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
      categories: [],
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.mountCategorieList = this.mountCategorieList.bind(this);
  }

  componentDidMount() {
    this.mountCategorieList();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleClick() {
    const { value, categories } = this.state;
    this.setState({ loading: true },
      async () => {
        const products = await getProductsFromCategoryAndQuery(categories, value);
        this.setState({
          loading: false,
          products: products.results,
        });
      });
  }

  async mountCategorieList() {
    this.setState({ loading: true },
      async () => {
        const response = await getCategories();
        this.setState({
          categories: response,
          loading: false,
        });
      });
  }

  render() {
    const { loading, products, value, categories } = this.state;
    return (
      <section>
        <div>
          <SearchBar
            loading={ loading }
            products={ products }
            value={ value }
            change={ this.handleChange }
            click={ this.handleClick }
          />
          <ButtonCart />
          <NavBar
            loading={ loading }
            categories={ categories }
            click={ this.handleClick }
          />
        </div>
      </section>
    );
  }
}

export default Home;
