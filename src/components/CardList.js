import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import Loading from './Loading';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SideBar from './SideBar';
import './CardList.css';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.getValue();
    }
  }

  getValue = () => {
    const { value } = this.props;
    try {
      throw getProductsFromCategoryAndQuery('', value)
        .then((data) => {
          this.setState({
            categories: data.results,
          });
        });
    } catch (e) {
      console.log(e);
    }
  }

  /* getIf = () => {
    const { value } = this.props;
    if (value.lenght > 0) {
      this.getValue();
    }
  } */

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
        <div
          className="card-list"
          data-testid="product"
        >
          { loading && <Loading /> }
          { categories.map((item) => (<CardItem
            key={ item.id }
            itemId={ item.id }
            title={ item.title }
            thumbnail={ item.thumbnail }
            price={ item.price }
          />)) }
        </div>
      </>
    );
  }
}

CardList.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CardList;
