import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { productList } = this.props;
    if (productList.length === 0) {
      return <div>Nenhum Produto Foi Encontrado</div>;
    }
    return (
      <div className="cards-div">
        { productList.map((item) => (
          <div key={ item.id } data-testid="product" className="card">
            <p className="card-title">{ item.title }</p>
            <img className="card-image" src={ item.thumbnail } alt={ item.title } />
            <p>{`R$: ${item.price}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.array,
    PropTypes.object,
  ).isRequired,
};

export default Products;
