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
      <div
        className="input-group"
        style={ { width: '280px' } }
      >
        <div className="category-list">
          <h4 className="h4-title">Categorias</h4>
          {categorias.map((i) => (
            <label
              className="list-unstyled ps-0"
              key={ i.name }
              data-testid="category"
              htmlFor={ i.id }
            >
              <input
                className="form-check-input mt-0"
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
      </div>
    );
  }
}

CategorieList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategorieList;
