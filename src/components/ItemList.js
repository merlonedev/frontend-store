import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import * as api from '../services/api';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itens: [],
    };
  }

  componentDidMount() {
    this.handleChangeInput();
  }

  handleChangeInput() {
    const { input } = this.props;
    api.getProductsFromCategoryAndQuery(false, input).then((item) => this.setState({
      itens: item.results,
    }));
  }

  render() {
    const { itens } = this.state;
    if (itens.length === 0) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        <div>
          {itens.map((item) => (
            <ItemCard item={ item } key={ item.id } />
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
