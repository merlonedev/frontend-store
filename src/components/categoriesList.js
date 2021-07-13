import React from 'react';
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
    return (
      <ul>
        {
          categories.map((item) => (
            <li
              data-testid="category"
              key={ item }
            >
              {item}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Categories;
