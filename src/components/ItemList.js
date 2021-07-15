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
    this.handleFirstChangeInput = this.handleFirstChangeInput.bind(this);
    this.handleFutureInputs = this.handleFutureInputs.bind(this);
  }

  componentDidMount() {
    this.handleFirstChangeInput();
  }

  componentDidUpdate(prevProps) {
    const { input, input2 } = this.props;
    if (input !== prevProps.input) {
      this.handleFutureInputs(input);
    }
    if (input2 !== prevProps.input2) {
      this.handleFutureInputs(input);
    }
  }

  async handleFutureInputs(input) {
    const { input2 } = this.props;
    const item = await getProductsFromCategoryAndQuery(input2, input);
    this.setState(() => ({ itens: item }));
  }

  async handleFirstChangeInput() {
    const { input, input2 } = this.props;
    const item = await getProductsFromCategoryAndQuery(input2, input);
    this.setState(() => ({ itens: item }));
  }

  render() {
    const { itens } = this.state;
    if (itens === undefined) return <Loading />;
    if ((itens.length === 0)) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div className="card-list">
        {itens.results.map((item) => (
          <ItemCard item={ item } key={ item.id } />
        ))}
      </div>
    );
  }
}

ItemList.propTypes = {
  input: PropTypes.string.isRequired,
  input2: PropTypes.string.isRequired,
};

export default ItemList;
