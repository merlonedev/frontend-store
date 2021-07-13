import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.changeState();
  }

  changeState() {
    getCategories().then((item) => this.setState({
      category: [...item],
    }));
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        {category.map((item) => (
          <div key={ item.id }>
            <Link
              data-testid="category"
              to={ `/categorias/${item.id}` }
              type="button"
              id={ item.id }
              className="categorybtn"
            >
              { item.name }
            </Link>
          </div>))}
      </div>
    );
  }
}

export default Category;
