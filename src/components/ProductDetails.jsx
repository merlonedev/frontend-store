import React, { Component } from 'react';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      id,
      title: '',
      price: '',
    };
    this.getProductFromId = this.getProductFromId.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.getProductFromId(id);
  }

  async getProductFromId(id) {
    const apiURL = `https://api.mercadolibre.com/items/${id}`;
    let resultRequest = await fetch(apiURL);
    resultRequest = await resultRequest.json();
    this.setState({
      title: resultRequest.title,
      price: resultRequest.price,
    });
  }

  render() {
    const { title, price } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          {title}
        </h1>
        <p>{price}</p>
      </div>
    );
  }
}
