import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const request = await getCategories();
    this.setState({
      request,
    });
  }

  render() {
    const { request } = this.state;
    return (
      <div>
        {request.map((product, index) => (
          <div key={ index } data-testid="category">
            <label htmlFor={ index }>
              <input
                id={ index }
                type="radio"
                name="category"
              />
              {product.name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
