import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import ButtonCart from '../Components/ButtonCart';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleClick() {
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

  render() {
    const { loading, products, value } = this.state;
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
          <NavBar />
        </div>
      </section>
    );
  }
}

export default Home;
