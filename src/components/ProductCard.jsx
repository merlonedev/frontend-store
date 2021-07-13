import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <h1>{ title }</h1>
        <img src={thumbnail} alt={title} />
        <p>R${price}</p>
      </div>
    );
  }
}

export default ProductCard;
