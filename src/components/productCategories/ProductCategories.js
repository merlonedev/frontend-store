import React, { Component } from 'react';
import { getCategories } from '../../services/api';

export default class ProductCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategories: [],
    };

    this.getProductCategories = this.getProductCategories.bind(this);
  }

  componentDidMount() {
    this.getProductCategories();
  }

  async getProductCategories() {
    const result = await getCategories();
    this.setState({
      productCategories: result,
    });
  }

  render() {
    const { productCategories } = this.state;
    return (
      <ul>
        {
          productCategories.map((productCategory) => (
            <li data-testid="category" key={ productCategory.id }>
              {productCategory.name}
            </li>
          ))
        }
      </ul>
    );
  }
}
