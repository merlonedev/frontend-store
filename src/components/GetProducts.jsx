import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ListProd from './ListProd';

class GetProducts extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      listCategories: [],
      products: [],
    };
  }

  componentDidMount() {
    this.updateCategories();
  }

  handleSubmit = async (inputSearch = '') => {
    const { category } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, inputSearch);
    this.setState({ products: results });
  }

  changeCategory = ({ target: { value } }) => {
    this.setState({ category: value }, () => {
      this.handleSubmit();
    });
  }

    updateCategories = async () => {
      const listCategories = await getCategories();
      this.setState({ listCategories });
    }

    render() {
      const { products, listCategories } = this.state;
      return (
        <div>
          <div className="list-category" onChange={ this.changeCategory }>
            {listCategories.map((product) => (
              <Categories key={ product.name } category={ product } />
            ))}
          </div>
          <ListProd products={ products } />
        </div>
      );
    }
}
export default GetProducts;
