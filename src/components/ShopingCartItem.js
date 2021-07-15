import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShopingCartItem extends React.Component {
  constructor(props) {
    super(props);
    const { item: { id } } = this.props;
    const itemStorage = JSON.parse(localStorage.getItem('itens'));
    const itemQtd = itemStorage.find((itemId) => itemId.id === id).quantity;
    this.state = {
      quantity: itemQtd,
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleIncrement() {
    const { item: { id } } = this.props;
    const storage = JSON.parse(localStorage.getItem('itens'));
    const arrayIDs = storage.map((item) => item.id);
    const indexObj = arrayIDs.indexOf(id);
    storage[indexObj].quantity += 1;
    localStorage.setItem('itens', JSON.stringify(storage));
    this.setState({ quantity: storage[indexObj].quantity });
  }

  handleDecrement() {
    const { item: { id } } = this.props;
    const storage = JSON.parse(localStorage.getItem('itens'));
    const arrayIDs = storage.map((item) => item.id);
    const indexObj = arrayIDs.indexOf(id);
    storage[indexObj].quantity -= 1;
    localStorage.setItem('itens', JSON.stringify(storage));
    this.setState({ quantity: storage[indexObj].quantity });
  }

  handleRemove(event) {
    event.target.parentNode.parentNode.remove();
    // this.setState({
    //   quantity: 0,
    // });
    this.removeStorage();
  }

  removeStorage() {
    const { item: { id } } = this.props;
    const storage = JSON.parse(localStorage.getItem('itens'));
    const newArray = storage.filter((item) => item.id !== id);
    localStorage.setItem('itens', JSON.stringify(newArray));
  }

  render() {
    const { quantity } = this.state;
    const { item, updateState } = this.props;
    const { id,
      category_id: category,
      title,
      thumbnail,
      price } = item;
    return (
      <div className="cart-item">
        <div data-testid="product" className="card" style={ { width: '20rem' } }>
          <img src={ thumbnail } alt={ title } className="card-img-top" />
          <div
            className="card-body"
          >
            <h4
              className="card-title"
              data-testid="shopping-cart-product-name"
            >
              {title}
            </h4>
            <p className="card-text">
              $
              {' '}
              {(quantity * price).toFixed(2)}
            </p>
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            <button
              onClick={ () => {
                this.handleIncrement();
                updateState();
              } }
              className="btn btn-warning"
              data-testid="product-increase-quantity"
              type="button"
            >
              +
            </button>
            <button
              onClick={ () => {
                this.handleDecrement();
                updateState();
              } }
              className="btn btn-danger"
              data-testid="product-decrease-quantity"
              type="button"
              disabled={ quantity === 1 }
            >
              -
            </button>
            <button
              onClick={ () => {
                updateState();
                this.handleRemove();
              } }
              className="btn btn-danger"
              data-testid="product-increase-quantity"
              type="button"
            >
              Remover
            </button>
            <Link
              className="link"
              data-testid="product-detail-link"
              to={ `/item/${category}/${id}` }
            >
              Mais Detalhes
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ShopingCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShopingCartItem;
