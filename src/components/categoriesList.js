import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.stateCategories = this.stateCategories.bind(this);
  }

  // chama a função stateCategories.
  componentDidMount() {
    this.stateCategories();
  }

  // função stateCategorias faz a requisição e seta o estado com cada item do json.
  async stateCategories() {
    const datas = await getCategories();
    const categories = datas.map((data) => data.name);
    this.setState({ categories });
  }

  // pega o item categories setado no estado e renderiza cada um dos itens.name dentro de uma li.
  render() {
    const { categories } = this.state;
    const { handleClick } = this.props;
    return (
      <>
        {
          categories.map((item) => (
            <button
              type="button"
              data-testid="category"
              key={ item }
              value={ item }
              onClick={ (e) => handleClick(e) }
            >
              {item}
            </button>
          ))
        }
      </>
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
