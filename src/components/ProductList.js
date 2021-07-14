import React, { Component } from 'react';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    const { prodList, query, } = this.props;
    this.state = {
      query,
      prodList: [...prodList],
      isEmpty: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonLogic = this.buttonLogic.bind(this);
    this.renderParag = this.renderParag.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    const category = this.props;
    if (category) {
      this.setState({
        isEmpty: false,
      });
    }
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      query: value,
      prodList: [],
    });
  }

  buttonLogic() {
    const { query } = this.state;
    const { category } = this.props;
    if (query) {
      api.getProductsFromCategoryAndQuery(category, query)
        .then((res) => {
          const products = res.results;
          this.setState({
            prodList: [...products],
            isEmpty: false,
          });
        });
    }
  }

  renderParag() {
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }

  renderList() {
    const { prodList } = this.state;
    return (
      prodList.map(
        (prod) => <ProductCard key={ prod.id } product={ prod } />,
      )
    );
  }

  render() {
    const { query, isEmpty } = this.state;

    return (
      <section>
        <input
          data-testid="query-input"
          type="text"
          name="query"
          onChange={ this.handleChange }
          value={ query }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.buttonLogic }
        >
          Pesquisar
        </button>
        {isEmpty ? this.renderParag() : this.renderList()}
      </section>
    );
  }
}

export default ProductList;
