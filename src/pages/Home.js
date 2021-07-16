import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import ButtonCart from '../Components/ButtonCart';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      categories: [],
      value: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.mountCategorieList = this.mountCategorieList.bind(this);
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

  render() {
    const { addToCart } = this.props;
    const { products, value, categories } = this.state;
    return (

      <section>
        <div>
          <SearchBar
            products={ products }
            value={ value }
            change={ this.handleChange }
            click={ this.handleClick }
            addToCart={ addToCart }
          />
          <ButtonCart />
          <NavBar
            categories={ categories }
            click={ this.handleClick }
          />
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
