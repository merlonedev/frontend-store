import React, { Component } from 'react';
import CardItem from './CardItem';
import { getProductsFromCategoryAndQuery } from '../services/api';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getProductsFromCategoryAndQuery('MLB1051', 'Motorola')
      .then((categories) => {
        this.setState({
          categories: categories.results,
        });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        { categories.map((item) => (<CardItem
          key={ item.id }
          title={ item.title }
          thumbnail={ item.thumbnail }
          price={ item.price }
        />)) }
      </div>
    );
  }
}

export default CardList;
