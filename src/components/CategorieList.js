import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategorieList extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((item) => this.setState({ categorias: item }));
  }

  render() {
    const { categorias } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <label data-testid="category" htmlFor="none">
          <input id="none" type="radio" name="t" onClick={ () => onClick('') } checked />
          Sem Categoria
        </label>
        {categorias.map((i) => (
          <label key={ i.name } data-testid="category" htmlFor={ i.id }>
            <input
              id={ i.id }
              key={ i.name }
              onClick={ () => onClick(i.id) }
              type="radio"
              name="t"
            />
            {i.name}
          </label>
        ))}
      </div>
    );
  }
}

CategorieList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategorieList;
