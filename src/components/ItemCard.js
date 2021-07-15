import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

class ItemCard extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
    this.handleItemQtd = this.handleItemQtd.bind(this);
  }

  handleItemQtd() {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  }

  render() {
    const { quantity } = this.state;
    const { item } = this.props;
    const { id,
      category_id: category,
      title,
      thumbnail,
      price } = item;
    return (
      <div data-testid="product" className="card" style={ { width: '20rem' } }>
        <img src={ thumbnail } alt={ title } className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            R$
            {' '}
            {price}
          </p>
          <Link
            className="link"
            data-testid="product-detail-link"
            to={ `/item/${category}/${id}` }
          >
            Mais Detalhes
          </Link>
          { (quantity === 0)
            && <AddToCart qtdIncrement={ this.handleItemQtd } productObj={ item } />}
          { (quantity > 0
            && <Link to="/Cart">Ver no carrinho</Link>)}
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemCard;
