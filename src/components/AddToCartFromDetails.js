import React from 'react';
import PropTypes from 'prop-types';

class AddToCartFromDetails extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const { productObj } = this.props;
    const storage = JSON.parse(localStorage.getItem('itens')) || [];
    const newStorage = [...storage, productObj];
    localStorage.setItem('itens', JSON.stringify(newStorage));
  }

  render() {
    return (
      <button
        className="btn btn-outline-primary"
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ this.addItem }
      >
        Adicione item ao carrinho
      </button>
    );
  }
}

AddToCartFromDetails.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddToCartFromDetails;
