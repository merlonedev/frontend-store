import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Products from './Products';

class SearchResults extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      productList: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    const { category, search } = this.props;
    const { category: prevCategory, search: prevSearch } = prevProps;
    if (prevSearch !== search || prevCategory !== category) {
      this.getProducts();
    }
  }

  async getProducts() {
    const { search, category } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const response = await api.getProductsFromCategoryAndQuery(category, search);
      this.setState({
        productList: response.results,
        loading: false,
      });
    });
  }

  render() {
    const { productList, loading } = this.state;
    if (loading) return <p>Carregando...</p>;
    if (productList.length === 0) {
      return (
        <p>Nenhum produto foi encontrado</p>
      );
    }
    return (
      <div>
        <Products productList={ productList } />
      </div>
    );
  }
}

SearchResults.propTypes = {
  category: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchResults;

/*
Referencia Git Hub:
Turma 11 - Grupo 35
Ajudou a fazer função da requisição da api.
https://github.com/tryber/sd-011-project-frontend-online-store/tree/requisito-5-grupo-35/src
Turma 10 - Grupo 9:
Ajudou no tratamento de informações da lista de produtos(função map product.js).
https://github.com/tryber/sd-010-a-project-frontend-online-store/tree/grupo9-requisito-5/src
*/
