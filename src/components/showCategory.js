import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { getCategories } from '../services/api';

export default class showCategory extends Component {
  constructor() {
  super();
  this.state= {
    results: [],
    loading: true,
    };
    this.changeState = this.changeState.bind(this);
    this.loadingShow = this.loadingShow.bind(this);
}

componentDidMount() {
    this.changeState();
}

changeState() {
    const { match: { params: {id } } } = this.props;
    getCategories()
    .then(({ results }) => ( 
    this.setState({
        results,
        loading: false,
    })
    ));
}

loadingShow() {
    return <img src="./loading.gif" alt="Loading" />;
}

render() {
    const { results, loading } = this.state;
    return loading ? this.loadingShow() : <ProductCard product={ results } />;

    }    
}

// showCategory.propTypes = {
//     match: Proptypes.shape({
//         params: Proptypes.shape({
//             categoria: Proptypes.string.isRequired,
//         }).isRequired,
//     }).isRequired,
// };