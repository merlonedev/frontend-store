import React, { Component } from 'react';
import CardItem from './CardItem';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SideBar from './SideBar';
import './CardList.css';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      query: 'motorola',
    };
  }

  componentDidMount() {
    const { query } = this.state;
    getProductsFromCategoryAndQuery('MLB1051', query)
      .then((categories) => {
        this.setState({
          categories: categories.results,
        });
      });
  }

  searchByCategorie = (id) => {
    getProductsFromCategoryAndQuery(id, '')
      .then(({ results }) => {
        this.setState({
          categories: results,
        });
      });
  }

  render() {
    const { categories, query } = this.state;
    return (
      <>
        <SideBar searchByCategorie={ this.searchByCategorie } />
        <div className="card-list">
          { categories.map((item) => (<CardItem
            key={ item.id }
            itemId={ item.id }
            query={ query }
            title={ item.title }
            thumbnail={ item.thumbnail }
            price={ item.price }
          />)) }
        </div>
      </>
    );
  }
}

export default CardList;
