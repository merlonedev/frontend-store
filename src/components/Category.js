import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Category extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.handleButton = this.handleButton.bind(this);

    this.state = {
      categories: [],
    };
  }

  handleButton(e) {
  const { callBack } = this.props; 
  
  const atribute = e.target.getAttribute("id"); 
  callBack(atribute);
  
  }

  componentDidMount() {
    this.handleState();
  }

  handleState() {
    getCategories().then((category) => this.setState({
      categories: [...category],
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <div key={ category.id }>
            <Link
              data-testid="category"
              key={ category.id }
              to={ `/categorias/${category.id}` }
              type="button"
              id={ category.id }
              className="btncategory"
              onClick={ this.handleButton } >
              { category.name }
            </Link>
          </div>))}
      </div>
    );
  }
}
