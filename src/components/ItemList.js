import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itens: [],
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentDidMount() {
    this.handleChangeInput();
  }

  // componentDidUpdate() {
  //   this.handleChangeInput();
  // }

  async handleChangeInput() {
    const { input } = this.props;
    const item = await getProductsFromCategoryAndQuery(false, input);
    this.setState({ itens: item });
    console.log(item);
  }

  render() {
    const { itens } = this.state;
    if (itens === undefined) return <Loading />;
    if ((itens.length === 0)) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div>
        <div>
          {itens.results.map((item) => (
            <ItemCard data-testid="product" item={ item } key={ item.id } />
          ))}
        </div>
      </div>
    );
  }
}

ItemList.propTypes = {
  input: PropTypes.string.isRequired,
};

export default ItemList;
