import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import ButtonCart from '../Components/ButtonCart';
import * as api from '../services/api';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
      value: '',
      categoryList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.mountListCategory = this.mountListCategory.bind(this);
  }

  componentDidMount() {
    this.mountListCategory();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleClick() {
    const { getProductsFromCategoryAndQuery } = api;
    const { value } = this.state;
    this.setState({ loading: true },
      async () => {
        const products = await getProductsFromCategoryAndQuery('', value);
        this.setState({
          loading: false,
          products: products.results,
        });
      });
  }

  async mountListCategory() {
    const { getCategories } = api;
    const response = await getCategories();
    this.setState({
      categoryList: response,
    });
    console.log('func', categoryList);
  }

  render() {
    const { loading, products, value, categoryList } = this.state;
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
          <NavBar category={ categoryList } />
        </div>
      </section>
    );
  }
}

export default Home;
