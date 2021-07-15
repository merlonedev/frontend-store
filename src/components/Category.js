import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.handleButton = this.handleButton.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleState();
  }

  handleButton(e) {
    const { callBack } = this.props;
    const atribute = e.target.getAttribute('id');
    callBack(atribute);
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
            <button
              data-testid="category"
              key={ category.id }
              type="button"
              id={ category.id }
              className="btncategory"
              onClick={ this.handleButton }
            >
              { category.name }
            </button>
          </div>))}
      </div>
    );
  }
}

Category.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default Category;
