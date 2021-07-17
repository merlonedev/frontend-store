import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import CartButton from '../components/CartButton';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: '',
      searchText: '',
      buttonClick: false,
      productList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getProductList = this.getProductList.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.getProductList());
  }

  async getProductList() {
    const { searchText, categoryId } = this.state;
    const {
      results,
    } = await api.getProductsFromCategoryAndQuery(categoryId, searchText);

    this.setState({
      buttonClick: true,
      productList: results,
    });
  }

  render() {
    const { buttonClick, productList } = this.state;

    const {
      cartProducts,
      totalQuantity,
      handleShoppingCart,
    } = this.props;

    const initialMsg = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    return (
      <div className="home-container">
        <header className="search-input-container">
          <label htmlFor="search-input">
            <input
              id="search-input"
              name="searchText"
              data-testid="query-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.getProductList }
          >
            Pesquisar
          </button>
          <span data-testid="shopping-cart-size">{totalQuantity}</span>
          <CartButton />
        </header>
        <main className="main-content-container">
          {
            (buttonClick)
              ? (
                <ProductList
                  productList={ productList }
                  cartProducts={ cartProducts }
                  handleShoppingCart={ handleShoppingCart }
                />
              )
              : initialMsg
          }
        </main>
        <Categories handleChange={ this.handleChange } />
      </div>
    );
  }
}

Home.propTypes = PropTypes.shape({
  totalQuantity: PropTypes.number.isRequired,
  handleShoppingCart: PropTypes.func.isRequired,
}).isRequired;

export default Home;
