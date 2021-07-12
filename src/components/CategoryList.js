import React from 'react';
import * as api from './services/api'

class CategoryList extends React {
  constructor() {
    super();
    this.state = {
      categories: {},
    };
  }
  
  componentDidMount() {
      fetchAPI();
    }
    
    async function fetchAPI() {
        const categoriesAPI = await api.getCategory();
        await this.setState({
            categories: categoriesAPI,
        });
    }
        
  render() {
    return (
      <ul>
        { xx.map((category) => <li>{ category.name }</li>) }
      </ul>
    );
  }
}

export default CategoryList;
