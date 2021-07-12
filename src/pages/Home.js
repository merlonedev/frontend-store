import React from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import CategoryList from '../components/CategoryList';
import Loading from '../components/Loading';

class Home extends React.Component {
  constructor() {
    super();

    this.state = ({
      categories: undefined,
    });

    this.categories = this.categories.bind(this);
    this.callCategoryList = this.callCategoryList.bind(this);
  }

  async componentDidMount() {
    this.categories();
  }

  async categories() {
    const categories = await Api.getCategories();
    console.log(categories);
    this.setState({
      categories,
    });
  }

  callCategoryList() {
    const { categories } = this.state;
    if (categories !== undefined) {
      return (
        <CategoryList
          categories={ categories }
        />
      );
    }
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <input
          type="text"
        />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
        { categories === undefined ? <Loading /> : this.callCategoryList() }
      </section>
    );
  }
}

export default Home;
