import React from 'react';
import NotFound from './NotFound';

class Products extends Components {
  render() {
    const { productList } = this.props;
    if (productList.length === 0) {
      return <NotFound />;
    }
    return (
      <div>
        { poroductList.map((item) => (
          <div key={ item.id } data-testid="product">
            <h1>{ item.title }</h1>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>{`R$: ${item.price}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
