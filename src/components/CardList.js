import React, { Component } from 'react';
import CardItem from './CardItem';
import Loading from './Loading';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SideBar from './SideBar';
import './CardList.css';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: false,
    };
  }

  searchByCategorie = (id) => {
    this.setState({ loading: true });
    getProductsFromCategoryAndQuery(id)
      .then(({ results }) => {
        this.setState({
          categories: results,
          loading: false,
        });
      });
  }

  render() {
    const { categories, loading } = this.state;
    return (
      <>
        <SideBar searchByCategorie={ this.searchByCategorie } />
        <div className="card-list">
          { loading && <Loading /> }
          { categories.map((item) => (<CardItem
            key={ item.id }
            itemId={ item.id }
            title={ item.title }
            thumbnail={ item.thumbnail }
            price={ item.price }
            item={ item }
          />)) }
        </div>
      </>
    );
  }
}

export default CardList;
